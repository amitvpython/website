import scrapy
from articles.models import GainerLoser

header = {
	'Authorization': '',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Charset': 'ISO-8859-1,utf-8;q=0.7,*;q=0.3',
    'Accept-Encoding': 'none',
    'Accept-Language': 'en-US,en;q=0.8',
    'Connection': 'keep-alive'
}

import urllib2
from urllib2 import urlopen
response = urlopen(urllib2.Request('https://www.ccn.com', headers=header)).read()

el = scrapy.Selector(text=response).css('#ccn-gainer_loser-2')

cats = ['gainer', 'loser']

obj, created = GainerLoser.objects.get_or_create(category='Top Gainer')

obj.currency_name = el.css('.top-gainer .currency-name::text').extract_first()
obj.currency_symbol = el.css('.top-gainer .currency-symbol::text').extract_first()
obj.percentage_change = el.css('.top-gainer .percentage-change::text').extract_first()
obj.currency_change = el.css('.top-gainer .currency-change::text').extract_first()

obj.save()

obj, created = GainerLoser.objects.get_or_create(category='Top Loser')

obj.currency_name = el.css('.top-loser .currency-name::text').extract_first()
obj.currency_symbol = el.css('.top-loser .currency-symbol::text').extract_first()
obj.percentage_change = el.css('.top-loser .percentage-change::text').extract_first()
obj.currency_change = el.css('.top-loser .currency-change::text').extract_first()

obj.save()