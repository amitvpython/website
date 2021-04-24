
var _ajax = function (url, data) {
    if (data == undefined) {
        data = {};
    }
    return new Promise(function (resolve, reject) {
        $.ajax({
            headers: {"X-CSRFToken": $("input[name*='csrfmiddlewaretoken']").val()},
            url: url,
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data: JSON.stringify(data),
            success: function (result) {

                resolve(result);
            },
            error: function (e) {
                console.log(e);
                reject(e);
            }
        });
    });
};
$('#ihavedropdown').on('change',function () {
    var country = {"USD":"country","EUR":"country","GBP":"country","INR":"country","JPY":"country","CAD":"country","AUD":"country","BRL":"country","BGN":"country","CLP":"country","CNY":"country","HRK":"country","CZK":"country","DKK":"country","HKD":"country","HUF":"country","IDR":"country","ILS":"country","MYR":"country","MXN":"country","NZD":"country","NOK":"country","PKR":"country","PHP":"country","PLN":"country","RON":"country","RUB":"country","SGD":"country","ZAR":"country","KRW":"country","SEK":"country","CHF":"country","THB":"country","TRY":"country","AED":"country","UAH":"country"}
    var strVar="";
    strVar += "<option value=\"BTC\">Bitcoin (BTC)<\/option>";
    strVar += "<option value=\"ETH\">Ethereum (ETH)<\/option>";
    strVar += "<option value=\"XRP\">Ripple (XRP)<\/option>";
    strVar += "<option value=\"BCH\">Bitcoin Cash (BCH)<\/option>";
    strVar += "<option value=\"ADA\">Cardano (ADA)<\/option>";
    strVar += "<option value=\"LTC\"> Litecoin (LTC)<\/option>";
    strVar += "<option value=\"ZRX\">0x (ZRX)<\/option>";
    strVar += "<option value=\"ACT\">Achain (ACT)<\/option>";
    strVar += "<option value=\"ADX\">AdEx (ADX)<\/option>";
    strVar += "<option value=\"ADST\">AdShares (ADST)<\/option>";
    strVar += "<option value=\"ADT\">adToken (ADT)<\/option>";
    strVar += "<option value=\"ELF\">aelf (ELF)<\/option>";
    strVar += "<option value=\"AEON\">Aeon (AEON)<\/option>";
    strVar += "<option value=\"ARN\">Aeron (ARN)<\/option>";
    strVar += "<option value=\"AE\">Aeternity (AE)<\/option>";
    strVar += "<option value=\"AGRS\">Agoras Tokens (AGRS)<\/option>";
    strVar += "<option value=\"DLT\">Agrello (DLT)<\/option>";
    strVar += "<option value=\"AION\">Aion (AION)<\/option>";
    strVar += "<option value=\"AST\">AirSwap (AST)<\/option>";
    strVar += "<option value=\"AIR\">AirToken (AIR)<\/option>";
    strVar += "<option value=\"ALIS\">ALIS (ALIS)<\/option>";
    strVar += "<option value=\"ALT\">Altcoin (ALT)<\/option>";
    strVar += "<option value=\"AMB\">Ambrosus (AMB)<\/option>";
    strVar += "<option value=\"ANT\">Aragon (ANT)<\/option>";
    strVar += "<option value=\"ARDR\">Ardor (ARDR)<\/option>";
    strVar += "<option value=\"ARK\">Ark (ARK)<\/option>";
    strVar += "<option value=\"ABY\">ArtByte (ABY)<\/option>";
    strVar += "<option value=\"XAS\">Asch (XAS)<\/option>";
    strVar += "<option value=\"AC\">AsiaCoin (AC)<\/option>";
    strVar += "<option value=\"ATB\">ATBCoin (ATB)<\/option>";
    strVar += "<option value=\"ATL\">ATLANT (ATL)<\/option>";
    strVar += "<option value=\"ATM\">ATMChain (ATM)<\/option>";
    strVar += "<option value=\"ATMS\">Atmos (ATMS)<\/option>";
    strVar += "<option value=\"ADC\">AudioCoin (ADC)<\/option>";
    strVar += "<option value=\"REP\">Augur (REP)<\/option>";
    strVar += "<option value=\"AUR\">Auroracoin (AUR)<\/option>";
    strVar += "<option value=\"AVT\">Aventus (AVT)<\/option>";
    strVar += "<option value=\"B2B\">B2B (B2B)<\/option>";
    strVar += "<option value=\"BNT\">Bancor (BNT)<\/option>";
    strVar += "<option value=\"BAT\">Basic Attentintion Token (BAT)<\/option>";
    strVar += "<option value=\"BCAP\">BCAP (BCAP)<\/option>";
    strVar += "<option value=\"BITB\">Bean Cash (BITB)<\/option>";
    strVar += "<option value=\"BNB\">Binance Coin (BNB)<\/option>";
    strVar += "<option value=\"BIS\">Bismuth (BIS)<\/option>";
    strVar += "<option value=\"BAY\">BitBay (BAY)<\/option>";
    strVar += "<option value=\"CAT\">BitClave (CAT)<\/option>";
    strVar += "<option value=\"BTDX\">Bitcloud (BTDX)<\/option>";
    strVar += "<option value=\"BTG\">Bitcoin Gold (BTG)<\/option>";
    strVar += "<option value=\"XBC\">Bitcoin Plus (XBC)<\/option>";
    strVar += "<option value=\"BTCD\">BitcoinDark (BTCD)<\/option>";
    strVar += "<option value=\"BCC\">BitConnect (BCC)<\/option>";
    strVar += "<option value=\"BTX\">Bitcore (BTX)<\/option>";
    strVar += "<option value=\"BCY\">Bitcrystals (BCY)<\/option>";
    strVar += "<option value=\"BDL\">Bitdeal (BDL)<\/option>";
    strVar += "<option value=\"CSNO\">BitDice (CSNO)<\/option>";
    strVar += "<option value=\"BQ\">bitqy (BQ)<\/option>";
    strVar += "<option value=\"BSD\">BitSend (BSD)<\/option>";
    strVar += "<option value=\"BTS\">BitShares (BTS)<\/option>";
    strVar += "<option value=\"ZNY\">Bitzeny (ZNY)<\/option>";
    strVar += "<option value=\"BLK\">BlackCoin (BLK)<\/option>";
    strVar += "<option value=\"BMC\">Blackmoon Crypto (BMC)<\/option>";
    strVar += "<option value=\"BLITZ\">Blitzcash (BLITZ)<\/option>";
    strVar += "<option value=\"BCPT\">BlockMason Cr... (BCPT)<\/option>";
    strVar += "<option value=\"BLOCK\">Blocknet (BLOCK)<\/option>";
    strVar += "<option value=\"BPL\">Blockpool (BPL)<\/option>";
    strVar += "<option value=\"TIX\">Blocktix (TIX)<\/option>";
    strVar += "<option value=\"VEE\">BLOCKv (VEE)<\/option>";
    strVar += "<option value=\"BOT\">Bodhi (BOT)<\/option>";
    strVar += "<option value=\"BON\">Bonpay (BON)<\/option>";
    strVar += "<option value=\"AHT\">Bowhead (AHT)<\/option>";
    strVar += "<option value=\"BRD\">Bread (BRD)<\/option>";
    strVar += "<option value=\"BRK\">Breakout (BRK)<\/option>";
    strVar += "<option value=\"BWK\">Bulwark (BWK)<\/option>";
    strVar += "<option value=\"BURST\">Burst (BURST)<\/option>";
    strVar += "<option value=\"GBYTE\">Byteball Bytes (GBYTE)<\/option>";
    strVar += "<option value=\"BCN\">Bytecoin (BCN)<\/option>";
    strVar += "<option value=\"BTM\">Bytom (BTM)<\/option>";
    strVar += "<option value=\"CANN\">CannabisCoin (CANN)<\/option>";
    strVar += "<option value=\"CTR\">Centra (CTR)<\/option>";
    strVar += "<option value=\"LINK\">ChainLink (LINK)<\/option>";
    strVar += "<option value=\"CAG\">Change (CAG)<\/option>";
    strVar += "<option value=\"TIME\">Chronobank (TIME)<\/option>";
    strVar += "<option value=\"CND\">Cindicator (CND)<\/option>";
    strVar += "<option value=\"COVAL\">Circuits of V... (COVAL)<\/option>";
    strVar += "<option value=\"CVC\">Civic (CVC)<\/option>";
    strVar += "<option value=\"CLAM\">Clams (CLAM)<\/option>";
    strVar += "<option value=\"POLL\">ClearPoll (POLL)<\/option>";
    strVar += "<option value=\"CLOAK\">CloakCoin (CLOAK)<\/option>";
    strVar += "<option value=\"CFI\">Cofound.it (CFI)<\/option>";
    strVar += "<option value=\"CDT\">CoinDash (CDT)<\/option>";
    strVar += "<option value=\"COSS\">COSS (COSS)<\/option>";
    strVar += "<option value=\"XCP\">Counterparty (XCP)<\/option>";
    strVar += "<option value=\"CRAVE\">Crave (CRAVE)<\/option>";
    strVar += "<option value=\"CREA\">Creativecoin (CREA)<\/option>";
    strVar += "<option value=\"CRB\">Creditbit (CRB)<\/option>";
    strVar += "<option value=\"CREDO\">Credo (CREDO)<\/option>";
    strVar += "<option value=\"CRC\">CrowdCoin (CRC)<\/option>";
    strVar += "<option value=\"CRW\">Crown (CRW)<\/option>";
    strVar += "<option value=\"CNX\">Cryptonex (CNX)<\/option>";
    strVar += "<option value=\"CURE\">Curecoin (CURE)<\/option>";
    strVar += "<option value=\"CMT\">CyberMiles (CMT)<\/option>";
    strVar += "<option value=\"BET\">DAO.Casino (BET)<\/option>";
    strVar += "<option value=\"DASH\">Dash (DASH)<\/option>";
    strVar += "<option value=\"DTB\">Databits (DTB)<\/option>";
    strVar += "<option value=\"DAT\">Datum (DAT)<\/option>";
    strVar += "<option value=\"DCT\">DECENT (DCT)<\/option>";
    strVar += "<option value=\"DBET\">DecentBet (DBET)<\/option>";
    strVar += "<option value=\"MANA\">Decentraland (MANA)<\/option>";
    strVar += "<option value=\"HST\">Decision Token (HST)<\/option>";
    strVar += "<option value=\"DCR\">Decred (DCR)<\/option>";
    strVar += "<option value=\"ONION\">DeepOnion (ONION)<\/option>";
    strVar += "<option value=\"DPY\">Delphy (DPY)<\/option>";
    strVar += "<option value=\"DENT\">Dent (DENT)<\/option>";
    strVar += "<option value=\"DCN\">Dentacoin (DCN)<\/option>";
    strVar += "<option value=\"DMD\">Diamond (DMD)<\/option>";
    strVar += "<option value=\"DGB\">DigiByte (DGB)<\/option>";
    strVar += "<option value=\"XDN\">DigitalNote (XDN)<\/option>";
    strVar += "<option value=\"DGD\">DigixDAO (DGD)<\/option>";
    strVar += "<option value=\"DIME\">Dimecoin (DIME)<\/option>";
    strVar += "<option value=\"DNT\">district0x (DNT)<\/option>";
    strVar += "<option value=\"DIVX\">Divi (DIVX)<\/option>";
    strVar += "<option value=\"DOGE\">Dogecoin (DOGE)<\/option>";
    strVar += "<option value=\"DRT\">DomRaider (DRT)<\/option>";
    strVar += "<option value=\"DOPE\">DopeCoin (DOPE)<\/option>";
    strVar += "<option value=\"DOT\">Dotcoin (DOT)<\/option>";
    strVar += "<option value=\"DRGN\">Dragonchain (DRGN)<\/option>";
    strVar += "<option value=\"DBIX\">DubaiCoin (DBIX)<\/option>";
    strVar += "<option value=\"DTR\">Dynamic Tradi... (DTR)<\/option>";
    strVar += "<option value=\"ECN\">E-coin (ECN)<\/option>";
    strVar += "<option value=\"EDR\">E-Dinar Coin (EDR)<\/option>";
    strVar += "<option value=\"ECOB\">Ecobit (ECOB)<\/option>";
    strVar += "<option value=\"EDG\">Edgeless (EDG)<\/option>";
    strVar += "<option value=\"EDO\">Eidoo (EDO)<\/option>";
    strVar += "<option value=\"EMC2\">Einsteinium (EMC2)<\/option>";
    strVar += "<option value=\"XEL\">Elastic (XEL)<\/option>";
    strVar += "<option value=\"ETN\">Electroneum (ETN)<\/option>";
    strVar += "<option value=\"ELIX\">Elixir (ELIX)<\/option>";
    strVar += "<option value=\"EMC\">Emercoin (EMC)<\/option>";
    strVar += "<option value=\"DNA\">EncrypGen (DNA)<\/option>";
    strVar += "<option value=\"ETT\">EncryptoTel [... (ETT)<\/option>";
    strVar += "<option value=\"ENRG\">Energycoin (ENRG)<\/option>";
    strVar += "<option value=\"ENG\">Enigma (ENG)<\/option>";
    strVar += "<option value=\"ENJ\"> Coin (ENJ)<\/option>";
    strVar += "<option value=\"EOS\">EOS (EOS)<\/option>";
    strVar += "<option value=\"ESP\">Espers (ESP)<\/option>";
    strVar += "<option value=\"ETC\">Ethereum Classic (ETC)<\/option>";
    strVar += "<option value=\"DICE\">Etheroll (DICE)<\/option>";
    strVar += "<option value=\"FUEL\">Etherparty (FUEL)<\/option>";
    strVar += "<option value=\"LEND\">ETHLend (LEND)<\/option>";
    strVar += "<option value=\"ETHOS\">Ethos (ETHOS)<\/option>";
    strVar += "<option value=\"EVX\">Everex (EVX)<\/option>";
    strVar += "<option value=\"XUC\">Exchange Union (XUC)<\/option>";
    strVar += "<option value=\"EXP\">Expanse (EXP)<\/option>";
    strVar += "<option value=\"FCT\">Factom (FCT)<\/option>";
    strVar += "<option value=\"FAIR\">FairCoin (FAIR)<\/option>";
    strVar += "<option value=\"FTC\">Feathercoin (FTC)<\/option>";
    strVar += "<option value=\"1ST\">FirstBlood (1ST)<\/option>";
    strVar += "<option value=\"FRST\">FirstCoin (FRST)<\/option>";
    strVar += "<option value=\"FLASH\">Flash (FLASH)<\/option>";
    strVar += "<option value=\"FLIXX\">Flixxo (FLIXX)<\/option>";
    strVar += "<option value=\"FLO\">FlorinCoin (FLO)<\/option>";
    strVar += "<option value=\"FYP\">FlypMe (FYP)<\/option>";
    strVar += "<option value=\"FLDC\">FoldingCoin (FLDC)<\/option>";
    strVar += "<option value=\"FUN\">FunFair (FUN)<\/option>";
    strVar += "<option value=\"GAM\">Gambit (GAM)<\/option>";
    strVar += "<option value=\"GAME\">GameCredits (GAME)<\/option>";
    strVar += "<option value=\"GAS\">Gas (GAS)<\/option>";
    strVar += "<option value=\"GVT\">Genesis Vision (GVT)<\/option>";
    strVar += "<option value=\"GEO\">GeoCoin (GEO)<\/option>";
    strVar += "<option value=\"GTO\">Gifto (GTO)<\/option>";
    strVar += "<option value=\"GCR\">Global Curren... (GCR)<\/option>";
    strVar += "<option value=\"GNO\">Gnosis (GNO)<\/option>";
    strVar += "<option value=\"GBX\">GoByte (GBX)<\/option>";
    strVar += "<option value=\"GLD\">GoldCoin (GLD)<\/option>";
    strVar += "<option value=\"GNT\">Golem (GNT)<\/option>";
    strVar += "<option value=\"GOLOS\">Golos (GOLOS)<\/option>";
    strVar += "<option value=\"GRC\">GridCoin (GRC)<\/option>";
    strVar += "<option value=\"GRS\">Groestlcoin (GRS)<\/option>";
    strVar += "<option value=\"NLG\">Gulden (NLG)<\/option>";
    strVar += "<option value=\"GXS\">GXShares (GXS)<\/option>";
    strVar += "<option value=\"HKN\">Hacken (HKN)<\/option>";
    strVar += "<option value=\"HEAT\">HEAT (HEAT)<\/option>";
    strVar += "<option value=\"HDG\">Hedge (HDG)<\/option>";
    strVar += "<option value=\"HGT\">HelloGold (HGT)<\/option>";
    strVar += "<option value=\"THC\">HempCoin (THC)<\/option>";
    strVar += "<option value=\"PLAY\">HEROcoin (PLAY)<\/option>";
    strVar += "<option value=\"HVN\">Hive (HVN)<\/option>";
    strVar += "<option value=\"HSR\">Hshare (HSR)<\/option>";
    strVar += "<option value=\"HMQ\">Humaniq (HMQ)<\/option>";
    strVar += "<option value=\"HUSH\">Hush (HUSH)<\/option>";
    strVar += "<option value=\"HYP\">HyperStake (HYP)<\/option>";
    strVar += "<option value=\"IOC\">I\/O Coin (IOC)<\/option>";
    strVar += "<option value=\"ICX\">ICON (ICX)<\/option>";
    strVar += "<option value=\"ICN\">Iconomi (ICN)<\/option>";
    strVar += "<option value=\"ICOS\">ICOS (ICOS)<\/option>";
    strVar += "<option value=\"RLC\">iExec RLC (RLC)<\/option>";
    strVar += "<option value=\"INCNT\">Incent (INCNT)<\/option>";
    strVar += "<option value=\"INK\">Ink (INK)<\/option>";
    strVar += "<option value=\"INN\">Innova (INN)<\/option>";
    strVar += "<option value=\"IOP\">Internet of P... (IOP)<\/option>";
    strVar += "<option value=\"IFT\">InvestFeed (IFT)<\/option>";
    strVar += "<option value=\"ION\">ION (ION)<\/option>";
    strVar += "<option value=\"ITC\">IoT Chain (ITC)<\/option>";
    strVar += "<option value=\"MIOTA\">IOTA (MIOTA)<\/option>";
    strVar += "<option value=\"IXT\">iXledger (IXT)<\/option>";
    strVar += "<option value=\"KICK\">KickCoin (KICK)<\/option>";
    strVar += "<option value=\"KLC\">KiloCoin (KLC)<\/option>";
    strVar += "<option value=\"KMD\">Komodo (KMD)<\/option>";
    strVar += "<option value=\"KCS\">KuCoin Shares (KCS)<\/option>";
    strVar += "<option value=\"KNC\">Kyber Network (KNC)<\/option>";
    strVar += "<option value=\"PIX\">Lampix (PIX)<\/option>";
    strVar += "<option value=\"LA\">LAToken (LA)<\/option>";
    strVar += "<option value=\"LBC\">LBRY Credits (LBC)<\/option>";
    strVar += "<option value=\"LEO\">LEOcoin (LEO)<\/option>";
    strVar += "<option value=\"LIFE\">LIFE (LIFE)<\/option>";
    strVar += "<option value=\"LINDA\">Linda (LINDA)<\/option>";
    strVar += "<option value=\"LSK\">Lisk (LSK)<\/option>";
    strVar += "<option value=\"LOC\">LockChain (LOC)<\/option>";
    strVar += "<option value=\"LMC\">LoMoCoin (LMC)<\/option>";
    strVar += "<option value=\"LRC\">Loopring (LRC)<\/option>";
    strVar += "<option value=\"LUN\">Lunyr (LUN)<\/option>";
    strVar += "<option value=\"LUX\">LUXCoin (LUX)<\/option>";
    strVar += "<option value=\"ART\">Maecenas (ART)<\/option>";
    strVar += "<option value=\"MAID\">MaidSafeCoin (MAID)<\/option>";
    strVar += "<option value=\"MKR\">Maker (MKR)<\/option>";
    strVar += "<option value=\"MTNC\">Masternodecoin (MTNC)<\/option>";
    strVar += "<option value=\"GUP\">Matchpool (GUP)<\/option>";
    strVar += "<option value=\"MED\">MediBloc (MED)<\/option>";
    strVar += "<option value=\"MDS\">MediShares (MDS)<\/option>";
    strVar += "<option value=\"MLN\">Melon (MLN)<\/option>";
    strVar += "<option value=\"MEME\">Memetic \/ Pep... (MEME)<\/option>";
    strVar += "<option value=\"MER\">Mercury (MER)<\/option>";
    strVar += "<option value=\"MTL\">Metal (MTL)<\/option>";
    strVar += "<option value=\"ETP\">Metaverse ETP (ETP)<\/option>";
    strVar += "<option value=\"AMM\">MicroMoney (AMM)<\/option>";
    strVar += "<option value=\"MNX\">MinexCoin (MNX)<\/option>";
    strVar += "<option value=\"MINT\">Mintcoin (MINT)<\/option>";
    strVar += "<option value=\"MGO\">MobileGo (MGO)<\/option>";
    strVar += "<option value=\"MOD\">Modum (MOD)<\/option>";
    strVar += "<option value=\"MDA\">Moeda Loyalty... (MDA)<\/option>";
    strVar += "<option value=\"MCO\">Monaco (MCO)<\/option>";
    strVar += "<option value=\"MONA\">MonaCoin (MONA)<\/option>";
    strVar += "<option value=\"XMR\">Monero (XMR)<\/option>";
    strVar += "<option value=\"MUE\">MonetaryUnit (MUE)<\/option>";
    strVar += "<option value=\"MTH\">Monetha (MTH)<\/option>";
    strVar += "<option value=\"XMCC\">Monoeci (XMCC)<\/option>";
    strVar += "<option value=\"MOON\">Mooncoin (MOON)<\/option>";
    strVar += "<option value=\"MSP\">Mothership (MSP)<\/option>";
    strVar += "<option value=\"MUSIC\">Musicoin (MUSIC)<\/option>";
    strVar += "<option value=\"MYB\">MyBit Token (MYB)<\/option>";
    strVar += "<option value=\"XMY\">Myriad (XMY)<\/option>";
    strVar += "<option value=\"MYST\">Mysterium (MYST)<\/option>";
    strVar += "<option value=\"NGC\">NAGA (NGC)<\/option>";
    strVar += "<option value=\"NMC\">Namecoin (NMC)<\/option>";
    strVar += "<option value=\"NAV\">NAV Coin (NAV)<\/option>";
    strVar += "<option value=\"NEBL\">Neblio (NEBL)<\/option>";
    strVar += "<option value=\"NAS\">Nebulas (NAS)<\/option>";
    strVar += "<option value=\"XEM\">NEM (XEM)<\/option>";
    strVar += "<option value=\"NEO\">NEO (NEO)<\/option>";
    strVar += "<option value=\"NEOS\">NeosCoin (NEOS)<\/option>";
    strVar += "<option value=\"NEU\">Neumark (NEU)<\/option>";
    strVar += "<option value=\"NTRN\">Neutron (NTRN)<\/option>";
    strVar += "<option value=\"NYC\">NewYorkCoin (NYC)<\/option>";
    strVar += "<option value=\"NXC\">Nexium (NXC)<\/option>";
    strVar += "<option value=\"NXS\">Nexus (NXS)<\/option>";
    strVar += "<option value=\"NET\">Nimiq (NET)<\/option>";
    strVar += "<option value=\"NLC2\">NoLimitCoin (NLC2)<\/option>";
    strVar += "<option value=\"NVC\">Novacoin (NVC)<\/option>";
    strVar += "<option value=\"USNBT\">NuBits (USNBT)<\/option>";
    strVar += "<option value=\"NULS\">Nuls (NULS)<\/option>";
    strVar += "<option value=\"NMR\">Numeraire (NMR)<\/option>";
    strVar += "<option value=\"NSR\">NuShares (NSR)<\/option>";
    strVar += "<option value=\"NXT\">Nxt (NXT)<\/option>";
    strVar += "<option value=\"OAX\">OAX (OAX)<\/option>";
    strVar += "<option value=\"OBITS\">OBITS (OBITS)<\/option>";
    strVar += "<option value=\"ODN\">Obsidian (ODN)<\/option>";
    strVar += "<option value=\"OK\">OKCash (OK)<\/option>";
    strVar += "<option value=\"OMG\">OmiseGO (OMG)<\/option>";
    strVar += "<option value=\"OMNI\">Omni (OMNI)<\/option>";
    strVar += "<option value=\"OTN\">Open Trading ... (OTN)<\/option>";
    strVar += "<option value=\"ORME\">Ormeus Coin (ORME)<\/option>";
    strVar += "<option value=\"OXY\">Oxycoin (OXY)<\/option>";
    strVar += "<option value=\"PRL\">Oyster (PRL)<\/option>";
    strVar += "<option value=\"PAC\">PACcoin (PAC)<\/option>";
    strVar += "<option value=\"PND\">Pandacoin (PND)<\/option>";
    strVar += "<option value=\"PRG\">Paragon (PRG)<\/option>";
    strVar += "<option value=\"PART\">Particl (PART)<\/option>";
    strVar += "<option value=\"PTOY\">Patientory (PTOY)<\/option>";
    strVar += "<option value=\"PPC\">Peercoin (PPC)<\/option>";
    strVar += "<option value=\"PPY\">Peerplays (PPY)<\/option>";
    strVar += "<option value=\"PEPECASH\">Pepe Cash (PEPECASH)<\/option>";
    strVar += "<option value=\"PTC\">Pesetacoin (PTC)<\/option>";
    strVar += "<option value=\"PHR\">Phore (PHR)<\/option>";
    strVar += "<option value=\"PLR\">Pillar (PLR)<\/option>";
    strVar += "<option value=\"PINK\">PinkCoin (PINK)<\/option>";
    strVar += "<option value=\"PIRL\">Pirl (PIRL)<\/option>";
    strVar += "<option value=\"PIVX\">PIVX (PIVX)<\/option>";
    strVar += "<option value=\"PLU\">Pluton (PLU)<\/option>";
    strVar += "<option value=\"POE\">Po.et (POE)<\/option>";
    strVar += "<option value=\"PLBT\">Polybius (PLBT)<\/option>";
    strVar += "<option value=\"PPT\">Populous (PPT)<\/option>";
    strVar += "<option value=\"POSW\">PoSW Coin (POSW)<\/option>";
    strVar += "<option value=\"POT\">PotCoin (POT)<\/option>";
    strVar += "<option value=\"POWR\">Power Ledger (POWR)<\/option>";
    strVar += "<option value=\"PRS\">Presearch (PRS)<\/option>";
    strVar += "<option value=\"PST\">Primas (PST)<\/option>";
    strVar += "<option value=\"XPM\">Primecoin (XPM)<\/option>";
    strVar += "<option value=\"PRO\">Propy (PRO)<\/option>";
    strVar += "<option value=\"PBL\">Publica (PBL)<\/option>";
    strVar += "<option value=\"PURA\">Pura (PURA)<\/option>";
    strVar += "<option value=\"PURE\">Pure (PURE)<\/option>";
    strVar += "<option value=\"QASH\">QASH (QASH)<\/option>";
    strVar += "<option value=\"QTUM\">Qtum (QTUM)<\/option>";
    strVar += "<option value=\"QSP\">Quantstamp (QSP)<\/option>";
    strVar += "<option value=\"QAU\">Quantum (QAU)<\/option>";
    strVar += "<option value=\"QRL\">Quantum Resis... (QRL)<\/option>";
    strVar += "<option value=\"QWARK\">Qwark (QWARK)<\/option>";
    strVar += "<option value=\"RADS\">Radium (RADS)<\/option>";
    strVar += "<option value=\"XRB\">RaiBlocks (XRB)<\/option>";
    strVar += "<option value=\"RDN\">Raiden Networh (RDN)<\/option>";
    strVar += "<option value=\"RHOC\">RChain (RHOC)<\/option>";
    strVar += "<option value=\"RPX\">Red Pulse (RPX)<\/option>";
    strVar += "<option value=\"RDD\">ReddCoin (RDD)<\/option>";
    strVar += "<option value=\"REC\">Regalcoin (REC)<\/option>";
    strVar += "<option value=\"REQ\">Request Network (REQ)<\/option>";
    strVar += "<option value=\"R\">Revain (R)<\/option>";
    strVar += "<option value=\"XRL\">Rialto (XRL)<\/option>";
    strVar += "<option value=\"RCN\">Ripio Creditit Network (RCN)<\/option>";
    strVar += "<option value=\"RISE\">Rise (RISE)<\/option>";
    strVar += "<option value=\"RVT\">Rivetz (RVT)<\/option>";
    strVar += "<option value=\"RBY\">Rubycoin (RBY)<\/option>";
    strVar += "<option value=\"RC\">RussiaCoin (RC)<\/option>";
    strVar += "<option value=\"SAFEX\">Safe Exchange... (SAFEX)<\/option>";
    strVar += "<option value=\"SALT\">SALT (SALT)<\/option>";
    strVar += "<option value=\"SLS\">SaluS (SLS)<\/option>";
    strVar += "<option value=\"SAN\">Santiment Network (SAN)<\/option>";
    strVar += "<option value=\"SEQ\">Sequence (SEQ)<\/option>";
    strVar += "<option value=\"SHIFT\">Shift (SHIFT)<\/option>";
    strVar += "<option value=\"SC\">Siacoin (SC)<\/option>";
    strVar += "<option value=\"SIB\">SIBCoin (SIB)<\/option>";
    strVar += "<option value=\"OST\">Simple Token (OST)<\/option>";
    strVar += "<option value=\"SNGLS\">SingularDTV (SNGLS)<\/option>";
    strVar += "<option value=\"SKY\">Skycoin (SKY)<\/option>";
    strVar += "<option value=\"SMART\">SmartCash (SMART)<\/option>";
    strVar += "<option value=\"SNOV\">Snovio (SNOV)<\/option>";
    strVar += "<option value=\"SOAR\">Soarcoin (SOAR)<\/option>";
    strVar += "<option value=\"SEND\">Social Send (SEND)<\/option>";
    strVar += "<option value=\"SLR\">SolarCoin (SLR)<\/option>";
    strVar += "<option value=\"SNM\">SONM (SNM)<\/option>";
    strVar += "<option value=\"SPHTX\">SophiaTX (SPHTX)<\/option>";
    strVar += "<option value=\"XSPEC\">Spectrecoin (XSPEC)<\/option>";
    strVar += "<option value=\"SPHR\">Sphere (SPHR)<\/option>";
    strVar += "<option value=\"SPF\">SportyFi (SPF)<\/option>";
    strVar += "<option value=\"SPR\">SpreadCoin (SPR)<\/option>";
    strVar += "<option value=\"STA\">Starta (STA)<\/option>";
    strVar += "<option value=\"SNT\">Status (SNT)<\/option>";
    strVar += "<option value=\"XST\">Stealthcoin (XST)<\/option>";
    strVar += "<option value=\"STEEM\">Steem (STEEM)<\/option>";
    strVar += "<option value=\"SBD\">Steem Dollars (SBD)<\/option>";
    strVar += "<option value=\"XLM\">Stellar (XLM)<\/option>";
    strVar += "<option value=\"STORJ\">Storj (STORJ)<\/option>";
    strVar += "<option value=\"STORM\">Storm (STORM)<\/option>";
    strVar += "<option value=\"STX\">Stox (STX)<\/option>";
    strVar += "<option value=\"STRAT\">Stratis (STRAT)<\/option>";
    strVar += "<option value=\"DATA\">Streamr DATAcoin (DATA)<\/option>";
    strVar += "<option value=\"SUB\">Substratum (SUB)<\/option>";
    strVar += "<option value=\"SUMO\">Sumokoin (SUMO)<\/option>";
    strVar += "<option value=\"SNC\">SunContract (SNC)<\/option>";
    strVar += "<option value=\"SWT\">Swarm City (SWT)<\/option>";
    strVar += "<option value=\"SYNX\">Syndicate (SYNX)<\/option>";
    strVar += "<option value=\"AMP\">Synereo (AMP)<\/option>";
    strVar += "<option value=\"SNRG\">Synergy (SNRG)<\/option>";
    strVar += "<option value=\"SYS\">Syscoin (SYS)<\/option>";
    strVar += "<option value=\"TAAS\">TaaS (TAAS)<\/option>";
    strVar += "<option value=\"XTO\">Tao (XTO)<\/option>";
    strVar += "<option value=\"TGT\">Target Coin (TGT)<\/option>";
    strVar += "<option value=\"PAY\">TenX (PAY)<\/option>";
    strVar += "<option value=\"USDT\">Tether (USDT)<\/option>";
    strVar += "<option value=\"TNT\">Tierion (TNT)<\/option>";
    strVar += "<option value=\"TNB\">Time New Bank (TNB)<\/option>";
    strVar += "<option value=\"TKN\">TokenCard (TKN)<\/option>";
    strVar += "<option value=\"TX\">TransferCoin (TX)<\/option>";
    strVar += "<option value=\"TZC\">TrezarCoin (TZC)<\/option>";
    strVar += "<option value=\"TRIG\">Triggers (TRIG)<\/option>";
    strVar += "<option value=\"TRX\">TRON (TRX)<\/option>";
    strVar += "<option value=\"TFL\">TrueFlip (TFL)<\/option>";
    strVar += "<option value=\"UBQ\">Ubiq (UBQ)<\/option>";
    strVar += "<option value=\"UKG\">Unikoin Gold (UKG)<\/option>";
    strVar += "<option value=\"UNIT\">Universal Cur... (UNIT)<\/option>";
    strVar += "<option value=\"UNO\">Unobtanium (UNO)<\/option>";
    strVar += "<option value=\"XVC\">Vcash (XVC)<\/option>";
    strVar += "<option value=\"VEN\">VeChain (VEN)<\/option>";
    strVar += "<option value=\"XVG\">Verge (XVG)<\/option>";
    strVar += "<option value=\"VRC\">VeriCoin (VRC)<\/option>";
    strVar += "<option value=\"VERI\">Veritaseum (VERI)<\/option>";
    strVar += "<option value=\"VRM\">VeriumReserve (VRM)<\/option>";
    strVar += "<option value=\"VTC\">Vertcoin (VTC)<\/option>";
    strVar += "<option value=\"VIA\">Viacoin (VIA)<\/option>";
    strVar += "<option value=\"VIBE\">VIBE (VIBE)<\/option>";
    strVar += "<option value=\"VIB\">Viberate (VIB)<\/option>";
    strVar += "<option value=\"VIVO\">VIVO (VIVO)<\/option>";
    strVar += "<option value=\"VOISE\">Voise (VOISE)<\/option>";
    strVar += "<option value=\"VOX\">Voxels (VOX)<\/option>";
    strVar += "<option value=\"VSX\">Vsync (VSX)<\/option>";
    strVar += "<option value=\"WABI\">WaBi (WABI)<\/option>";
    strVar += "<option value=\"WGR\">Wagerr (WGR)<\/option>";
    strVar += "<option value=\"WTC\">Walton (WTC)<\/option>";
    strVar += "<option value=\"WAVES\">Waves (WAVES)<\/option>";
    strVar += "<option value=\"WCT\">Waves Communi... (WCT)<\/option>";
    strVar += "<option value=\"WAX\">WAX (WAX)<\/option>";
    strVar += "<option value=\"TRST\">WeTrust (TRST)<\/option>";
    strVar += "<option value=\"XWC\">WhiteCoin (XWC)<\/option>";
    strVar += "<option value=\"WILD\">Wild Crypto (WILD)<\/option>";
    strVar += "<option value=\"WINGS\">Wings (WINGS)<\/option>";
    strVar += "<option value=\"WRC\">Worldcore (WRC)<\/option>";
    strVar += "<option value=\"XAUR\">Xaurum (XAUR)<\/option>";
    strVar += "<option value=\"XGOX\">XGOX (XGOX)<\/option>";
    strVar += "<option value=\"XBY\">XTRABYTES (XBY)<\/option>";
    strVar += "<option value=\"YOYOW\">YOYOW (YOYOW)<\/option>";
    strVar += "<option value=\"ZEC\">Zcash (ZEC)<\/option>";
    strVar += "<option value=\"ZCL\">ZClassic (ZCL)<\/option>";
    strVar += "<option value=\"XZC\">ZCoin (XZC)<\/option>";
    strVar += "<option value=\"ZEN\">ZenCash (ZEN)<\/option>";
    strVar += "<option value=\"ZER\">Zero (ZER)<\/option>";
    strVar += "<option value=\"ZSC\">Zeusshield (ZSC)<\/option>";
    strVar += "<option value=\"ZOI\">Zoin (ZOI)<\/option>";
    var strVar1="";
    strVar1 += "<option value=\"\">Search Currency<\/option>";
    strVar1 += "<option value=\"USD\">United States Dollar (USD)<\/option>";
    strVar1 += "<option value=\"EUR\">Euro (EUR)<\/option>";
    strVar1 += "<option value=\"GBP\">British Pound (GBP)<\/option>";
    strVar1 += "<option value=\"INR\">Indian Rupee (INR)<\/option>";
    strVar1 += "<option value=\"JPY\">Japanese Yen (JPY)<\/option>";
    strVar1 += "<option value=\"CAD\">Canadian Dollar (CAD)<\/option>";
    strVar1 += "<option value=\"AUD\">Australian Dollar (AUD)<\/option>";
    strVar1 += "<option value=\"BRL\">Brazilian Real (BRL)<\/option>";
    strVar1 += "<option value=\"BGN\">Bulgarian Lev (BGN)<\/option>";
    strVar1 += "<option value=\"CLP\">Chilean Peso (CLP)<\/option>";
    strVar1 += "<option value=\"CNY\">Chinese Yuan Renminbi (CNY)<\/option>";
    strVar1 += "<option value=\"HRK\">Croatian Kuna (HRK)<\/option>";
    strVar1 += "<option value=\"CZK\">Czech Koruna (CZK)<\/option>";
    strVar1 += "<option value=\"DKK\">Danish Krone (DKK)<\/option>";
    strVar1 += "<option value=\"HKD\">Hong Kong Dollar (HKD)<\/option>";
    strVar1 += "<option value=\"HUF\">Hungarian Forint (HUF)<\/option>";
    strVar1 += "<option value=\"IDR\">Indonesian Rupiah (IDR)<\/option>";
    strVar1 += "<option value=\"ILS\">Israeli New Shekel (ILS)<\/option>";
    strVar1 += "<option value=\"MYR\">Malaysian Ringgit (MYR)<\/option>";
    strVar1 += "<option value=\"MXN\">Mexican Peso (MXN)<\/option>";
    strVar1 += "<option value=\"NZD\">New Zealand Dollar (NZD)<\/option>";
    strVar1 += "<option value=\"NOK\">Norwegian Krone (NOK)<\/option>";
    strVar1 += "<option value=\"PKR\">Pakistani Rupee (PKR)<\/option>";
    strVar1 += "<option value=\"PHP\">Philippine Peso (PHP)<\/option>";
    strVar1 += "<option value=\"PLN\">Polish Zloty (PLN)<\/option>";
    strVar1 += "<option value=\"RON\">Romanian Leu (RON)<\/option>";
    strVar1 += "<option value=\"RUB\">Russian Ruble (RUB)<\/option>";
    strVar1 += "<option value=\"SGD\">Singapore Dollar (SGD)<\/option>";
    strVar1 += "<option value=\"ZAR\">South African Rand (ZAR)<\/option>";
    strVar1 += "<option value=\"KRW\">South Korean Won (KRW)<\/option>";
    strVar1 += "<option value=\"SEK\">Swedish Krona (SEK)<\/option>";
    strVar1 += "<option value=\"CHF\">Swiss Franc (CHF)<\/option>";
    strVar1 += "<option value=\"THB\">Thai Baht (THB)<\/option>";
    strVar1 += "<option value=\"TRY\">Turkish Lira (TRY)<\/option>";
    strVar1 += "<option value=\"AED\">UAE Dirham (AED)<\/option>";
    strVar1 += "<option value=\"UAH\">Ukrainian Hryvnia (UAH)<\/option>";

    var dropdown_value = $('#ihavedropdown').val()
    if(country[dropdown_value]){

        $('#iwantdropdown').html(strVar)

    }
    else {
        $('#iwantdropdown').html(strVar1+strVar)
    }



})

$('#exchangeform').on('submit', function(event) {
    event.preventDefault();
    // gtag('event', 'scanexchange');
    // fbq('track', 'scanexchange');
    exchangeAPI();
})

function exchangeAPI() {
    var countInOnePage = 10;
    var countShowPages = 3;
    var countPages = 0;
    var currentPage;
    var result;
    var resultCount;
    var amount;

    amount = $('#amount').val();
    var toCurrency = $('#iwantdropdown').val();
    var fromCurrency = $('#ihavedropdown').val();

    if (!amount) {
        $('#amount').addClass('is-invalid');
    }

    if (!toCurrency) {
        $('#iwantdropdown').parent().find('.select2').addClass('is-invalid');

    }

    if (!fromCurrency) {
        $('#ihavedropdown').parent().find('.select2').addClass('is-invalid');

    }

    if (toCurrency == fromCurrency) {
        $('#iwantdropdown').parent().find('.select2').addClass('is-invalid');
        $('#ihavedropdown').parent().find('.select2').addClass('is-invalid');
    }

    var input_data = {
        toCurrency: $('#iwantdropdown').val(),
        fromCurrency: $('#ihavedropdown').val(),
        amount: $('#amount').val()
    }

    if (amount && toCurrency && fromCurrency && toCurrency != fromCurrency) {

        _ajax(window.location.origin + '/exchange/',input_data).then(function (data) {
            if (data.conversion_amount == ''){

                // $("#wantVal").val('');
                $("#wantVal #from").html('');
                $("#wantVal #to").html('');
                $("#wantVal #message").html('No currency or exchange.');
                $('#comparisonTable').show();
                $('.no_data').show();
            }

            if (resultCount = data.data.length) {

                $("#wantVal #from").html($('#amount').val() + ' ' + $('#ihavedropdown').val() + '=');
                $("#wantVal #to").html(data.conversion_amount + ' ' + $('#iwantdropdown').val());
                $("#wantVal #message").html('See below for more information');
                $("#wantVal").show();

                // document.getElementById("wantVal").value = data.conversion_amount;

                result = data.data;
                currentPage = 1;

                if (resultCount > countInOnePage) {
                    countPages = Math.ceil(resultCount / countInOnePage);
                    renderPagination();
                } else {
                    $('#pagination').hide();
                }

                $('.no_data').hide();

                renderData();
            } else {
                $('#comparisonTable').show();
                $('.no_data').show();
                $('#price-table').hide();
                $('#pagination').hide();
            }
        })


        $('#iwantdropdown').parent().find('.select2').removeClass('is-invalid');
        $('#ihavedropdown').parent().find('.select2').removeClass('is-invalid');
    }


    function renderPagination() {
        var minPage, maxPage;

        if (currentPage == 1) {
            minPage = 1;
            maxPage = countShowPages;
        } else if (currentPage == countPages) {
            minPage = countPages - countShowPages * 1 + 1;

            if (minPage <= 0) {
                minPage = 1;
            }

            maxPage = countPages;
        } else {
            minPage = currentPage * 1 - 1;
            maxPage = currentPage * 1 + 1;
        }

        $('#pagination').show();
        var paginationHtml = '<li class="page-item"><a class="page-link" href="1"><</a></li>';

        for (var i = minPage; i <= maxPage; i++) {
            var active = '';

            if (i == currentPage) {
                active = 'active';
            }
            paginationHtml += '<li class="page-item '+ active +'"><a class="page-link active" href="'+ i +'">' + i + '</a></li>'
        }

        paginationHtml += '<li class="page-item"><a class="page-link" href="'+ countPages +'">></a></li>';

        $('.pagination').html(paginationHtml);
        $('.page-item').on('click', clickPage);
    }

    function clickPage(e) {
        var page = $(e.currentTarget).find('a').attr('href');

        if (page != currentPage) {
            currentPage = page;
            renderPagination();
            renderData();
        }

        return false;
    }

    function renderData() {
        $('#comparisonTable').show();
        $('#price-table').show();

        var html = '';
        var start = (currentPage - 1) * countInOnePage;
        var end = start + countInOnePage;

        if (resultCount < end) {
            end = resultCount;
        }
        var strVar=""
        for (var i = start; i < end; i++) {
            var id = '';
            var data=result[i];
            console.log(data);
            strVar += '<tr>';
            strVar += '    <td><a style=" width:100%; text-align: center" href=" "> <div class="align-middle"><div>' + data[0][0] + '</div></a> <a style="text-align: center; width:100%;"  href=" "> <div>' + data[0][1] + '</div></div></a></td>';
            strVar += '    <td><a href="' + data[1][0].link + '" target="_blank"><span style="width:100%; display:flex;  justify-content:center;"><img style="vertical-align:middle;" src="' + data[1][0].image + ' "></span></a>' + '<a href="' + data[1][1].link + '" target="_blank"><span style="width:100%; display:flex;  justify-content:center;"><img style="vertical-align:middle;" src="' + data[1][1].image + ' "></span></a></td>';
            strVar += '    <td><div style="width:100%; text-align: center">' + data[2][0] + '</div><div style="100%; text-align: center">' + data[2][1] + '</div></td>';
            strVar += '    <td><div style="width:100%; text-align: center">' + data[3][0] + '</div><div style="100%; text-align: center">' + data[3][1] + '</div></td>';
            strVar += '</tr>';

        }
        $('#price-table tbody').html(strVar);

    }
}
