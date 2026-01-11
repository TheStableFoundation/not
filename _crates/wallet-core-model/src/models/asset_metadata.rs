use {
    crate::models::asset_solana::SolanaAsset,
    serde::{Deserialize, Serialize},
    smbcloud_wallet_constants::assets_solana::{
        ADDRESS_AAPLX, ADDRESS_ABBVX, ADDRESS_ABTX, ADDRESS_ACNX, ADDRESS_AMBRX, ADDRESS_AMZNX,
        ADDRESS_APPX, ADDRESS_AVGOX, ADDRESS_AZNX, ADDRESS_BACH_TOKEN, ADDRESS_BACX,
        ADDRESS_BRK_BX, ADDRESS_CBBTC, ADDRESS_CMCSAX, ADDRESS_COINX, ADDRESS_CRCLX, ADDRESS_CRMX,
        ADDRESS_CRWDX, ADDRESS_CSCOX, ADDRESS_CVXX, ADDRESS_DFDVX, ADDRESS_DHRX, ADDRESS_EURC,
        ADDRESS_GLDX, ADDRESS_GMEX, ADDRESS_GOOGLX, ADDRESS_GSX, ADDRESS_HDX, ADDRESS_HONX,
        ADDRESS_HOODX, ADDRESS_IBMX, ADDRESS_INTCX, ADDRESS_JNJX, ADDRESS_JPMX, ADDRESS_JUPITER,
        ADDRESS_KOX, ADDRESS_LINX, ADDRESS_LLYX, ADDRESS_MAX, ADDRESS_MCDX, ADDRESS_MDTX,
        ADDRESS_METAX, ADDRESS_MRKX, ADDRESS_MRVLX, ADDRESS_MSFTX, ADDRESS_MSTRX, ADDRESS_NFLXX,
        ADDRESS_NVDAX, ADDRESS_NVOX, ADDRESS_OPENX, ADDRESS_ORCLX, ADDRESS_PEPX, ADDRESS_PFEX,
        ADDRESS_PGX, ADDRESS_PLTRX, ADDRESS_PMX, ADDRESS_QQQX, ADDRESS_SOL, ADDRESS_SPYX,
        ADDRESS_STRCX, ADDRESS_TBLLX, ADDRESS_TMOX, ADDRESS_TONXX, ADDRESS_TQQQX, ADDRESS_TSLAX,
        ADDRESS_UNHX, ADDRESS_USD1, ADDRESS_USDC, ADDRESS_USDG, ADDRESS_USDS, ADDRESS_USDT,
        ADDRESS_VTIX, ADDRESS_VX, ADDRESS_WMTX, ADDRESS_XBTC, ADDRESS_XOMX, ADDRESS_ZBTC,
    },
    tsync::tsync,
};

#[derive(Debug, Clone, PartialEq, Serialize, Deserialize)]
#[tsync]
pub struct Metadata {
    pub address: String,
    pub name: String,
    pub symbol: String,
    pub decimal: u8,
    pub logo_uri: String,
}

impl Metadata {
    pub fn into_asset(self) -> Option<SolanaAsset> {
        SolanaAsset::from_address(self.address)
    }
    pub fn native() -> Self {
        Metadata {
            address: ADDRESS_SOL.to_string(),
            name: "Solana".to_string(),
            symbol: "SOL".to_string(),
            decimal: 9,
            logo_uri: "https://raw.githubusercontent.com/TheStableFoundation/notwallet/refs/heads/development/public/images/solana-coin.svg".to_string(),
        }
    }
    pub fn bach_token() -> Self {
        Metadata {
            address: ADDRESS_BACH_TOKEN.to_string(),
            name: "BACH Token".to_string(),
            symbol: "BACH".to_string(),
            decimal: 12,
            logo_uri: "https://raw.githubusercontent.com/solana-labs/token-list/badd1dbe8c2d1e38c4f77b77f1d5fd5c60d3cccb/assets/mainnet/CTQBjyrX8pYyqbNa8vAhQfnRXfu9cUxnvrxj5PvbzTmf/bach-token-logo-Est.2022.png".to_string(),
        }
    }
    /// Bitcoin
    pub fn zbtc() -> Self {
        Metadata {
            address: ADDRESS_ZBTC.to_string(),
            name: "zBTC (zBTC)".to_string(),
            symbol: "zBTC".to_string(),
            decimal: 8,
            logo_uri:
                "https://raw.githubusercontent.com/ZeusNetworkHQ/zbtc-metadata/main/lgoo-v2.png"
                    .to_string(),
        }
    }
    pub fn cbbtc() -> Self {
        Metadata {
            address: ADDRESS_CBBTC.to_string(),
            name: "Coinbase Wrapped BTC".to_string(),
            symbol: "cbBTC".to_string(),
            decimal: 8,
            logo_uri: "https://ipfs.io/ipfs/QmZ7L8yd5j36oXXydUiYFiFsRHbi3EdgC4RuFwvM7dcqge"
                .to_string(),
        }
    }
    pub fn xbtc() -> Self {
        Metadata {
            address: ADDRESS_XBTC.to_string(),
            name: "OKX Wrapped BTC".to_string(),
            symbol: "xBTC".to_string(),
            decimal: 8,
            logo_uri: "https://assets.coingecko.com/coins/images/66627/standard/xbtc.png"
                .to_string(),
        }
    }
    /// End Bitcoin
    pub fn jupiter() -> Self {
        Metadata {
            address: ADDRESS_JUPITER.to_string(),
            name: "Jupiter".to_string(),
            symbol: "JUP".to_string(),
            decimal: 6,
            logo_uri: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN/logo.png".to_string(),
        }
    }
    pub fn usdc() -> Self {
        Metadata {
            address: ADDRESS_USDC.to_string(),
            name: "USD Coin".to_string(),
            symbol: "USDC".to_string(),
            decimal: 6,
            logo_uri: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png".to_string(),
        }
    }
    pub fn usdt() -> Self {
        Metadata {
            address: ADDRESS_USDT.to_string(),
            name: "Tether USD".to_string(),
            symbol: "USDT".to_string(),
            decimal: 6,
            logo_uri: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB/logo.svg".to_string(),
        }
    }
    pub fn usdg() -> Self {
        Metadata {
            address: ADDRESS_USDG.to_string(),
            name: "Global Dollar".to_string(),
            symbol: "USDG".to_string(),
            decimal: 6,
            logo_uri: "https://424565.fs1.hubspotusercontent-na1.net/hubfs/424565/GDN-USDG-Token-512x512.png".to_string(),
        }
    }
    pub fn usds() -> Self {
        Metadata {
            address: ADDRESS_USDS.to_string(),
            name: "USDS".to_string(),
            symbol: "USDS".to_string(),
            decimal: 6,
            logo_uri: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/USDSwr9ApdHk5bvJKMjzff41FfuX8bSxdKcR81vTwcA/logo.svg".to_string(),
        }
    }
    pub fn usd1() -> Self {
        Metadata {
            address: ADDRESS_USD1.to_string(),
            name: "USD1".to_string(),
            symbol: "USD1".to_string(),
            decimal: 6,
            logo_uri: "https://cdn.usd1protocol.com/logo.png".to_string(),
        }
    }
    pub fn eurc() -> Self {
        Metadata {
            address: ADDRESS_EURC.to_string(),
            name: "Euro Coin".to_string(),
            symbol: "EURC".to_string(),
            decimal: 6,
            logo_uri: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr/logo.png".to_string(),
        }
    }
    pub fn msftx() -> Self {
        Metadata {
            address: ADDRESS_MSFTX.to_string(),
            name: "Microsoft xStock".to_string(),
            symbol: "MSFTx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/68497bdc918924ea97fd8211_Ticker%3DMSFT%2C%20Company%20Name%3DMicrosoft%20Inc.%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn amznx() -> Self {
        Metadata {
            address: ADDRESS_AMZNX.to_string(),
            name: "Amazon xStock".to_string(),
            symbol: "AMZNx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/68497d354d7140b01657a793_Ticker%3DAMZN%2C%20Company%20Name%3DAmazon.com%20Inc.%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn metax() -> Self {
        Metadata {
            address: ADDRESS_METAX.to_string(),
            name: "Meta xStock".to_string(),
            symbol: "METAx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/68497dee3db1bae97b91ac05_Ticker%3DMETA%2C%20Company%20Name%3DMeta%20Platforms%20Inc.%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn aaplx() -> Self {
        Metadata {
            address: ADDRESS_AAPLX.to_string(),
            name: "Apple xStock".to_string(),
            symbol: "AAPLx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/6849799260ee65bf38841f90_Ticker%3DAAPL%2C%20Company%20Name%3DApple%20Inc.%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn googlx() -> Self {
        Metadata {
            address: ADDRESS_GOOGLX.to_string(),
            name: "Alphabet xStock".to_string(),
            symbol: "GOOGLx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684aae04a3d8452e0ae4bad8_Ticker%3DGOOG%2C%20Company%20Name%3DAlphabet%20Inc.%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn nvdax() -> Self {
        Metadata {
            address: ADDRESS_NVDAX.to_string(),
            name: "NVIDIA xStock".to_string(),
            symbol: "NVDAx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684961bfb45e3c4d777b9997_Ticker%3DNVDA%2C%20Company%20Name%3DNVIDIA%20Corp%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn tslax() -> Self {
        Metadata {
            address: ADDRESS_TSLAX.to_string(),
            name: "Tesla xStock".to_string(),
            symbol: "TSLAx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684aaf9559b2312c162731f5_Ticker%3DTSLA%2C%20Company%20Name%3DTesla%20Inc.%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn abtx() -> Self {
        Metadata {
            address: ADDRESS_ABTX.to_string(),
            name: "Abbott xStock".to_string(),
            symbol: "ABTx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn abbvx() -> Self {
        Metadata {
            address: ADDRESS_ABBVX.to_string(),
            name: "AbbVie xStock".to_string(),
            symbol: "ABBVx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn acnx() -> Self {
        Metadata {
            address: ADDRESS_ACNX.to_string(),
            name: "Accenture xStock".to_string(),
            symbol: "ACNx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn ambrx() -> Self {
        Metadata {
            address: ADDRESS_AMBRX.to_string(),
            name: "Amber xStock".to_string(),
            symbol: "AMBRx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn appx() -> Self {
        Metadata {
            address: ADDRESS_APPX.to_string(),
            name: "AppLovin xStock".to_string(),
            symbol: "APPx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn aznx() -> Self {
        Metadata {
            address: ADDRESS_AZNX.to_string(),
            name: "AstraZeneca xStock".to_string(),
            symbol: "AZNx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn bacx() -> Self {
        Metadata {
            address: ADDRESS_BACX.to_string(),
            name: "Bank of America xStock".to_string(),
            symbol: "BACx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn brk_bx() -> Self {
        Metadata {
            address: ADDRESS_BRK_BX.to_string(),
            name: "Berkshire Hathaway xStock".to_string(),
            symbol: "BRK.Bx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn avgox() -> Self {
        Metadata {
            address: ADDRESS_AVGOX.to_string(),
            name: "Broadcom xStock".to_string(),
            symbol: "AVGOx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn cvxx() -> Self {
        Metadata {
            address: ADDRESS_CVXX.to_string(),
            name: "Chevron xStock".to_string(),
            symbol: "CVXx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn crclx() -> Self {
        Metadata {
            address: ADDRESS_CRCLX.to_string(),
            name: "Circle xStock".to_string(),
            symbol: "CRCLx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn cscox() -> Self {
        Metadata {
            address: ADDRESS_CSCOX.to_string(),
            name: "Cisco xStock".to_string(),
            symbol: "CSCOx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn kox() -> Self {
        Metadata {
            address: ADDRESS_KOX.to_string(),
            name: "Coca-Cola xStock".to_string(),
            symbol: "KOx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn coinx() -> Self {
        Metadata {
            address: ADDRESS_COINX.to_string(),
            name: "Coinbase xStock".to_string(),
            symbol: "COINx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn cmcsax() -> Self {
        Metadata {
            address: ADDRESS_CMCSAX.to_string(),
            name: "Comcast xStock".to_string(),
            symbol: "CMCSAx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn crwdx() -> Self {
        Metadata {
            address: ADDRESS_CRWDX.to_string(),
            name: "CrowdStrike xStock".to_string(),
            symbol: "CRWDx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn dhrx() -> Self {
        Metadata {
            address: ADDRESS_DHRX.to_string(),
            name: "Danaher xStock".to_string(),
            symbol: "DHRx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn dfdvx() -> Self {
        Metadata {
            address: ADDRESS_DFDVX.to_string(),
            name: "DFDV xStock".to_string(),
            symbol: "DFDVx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn llyx() -> Self {
        Metadata {
            address: ADDRESS_LLYX.to_string(),
            name: "Eli Lilly xStock".to_string(),
            symbol: "LLYx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn xomx() -> Self {
        Metadata {
            address: ADDRESS_XOMX.to_string(),
            name: "Exxon Mobil xStock".to_string(),
            symbol: "XOMx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn gmex() -> Self {
        Metadata {
            address: ADDRESS_GMEX.to_string(),
            name: "Gamestop xStock".to_string(),
            symbol: "GMEx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn gldx() -> Self {
        Metadata {
            address: ADDRESS_GLDX.to_string(),
            name: "Gold xStock".to_string(),
            symbol: "GLDx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn gsx() -> Self {
        Metadata {
            address: ADDRESS_GSX.to_string(),
            name: "Goldman Sachs xStock".to_string(),
            symbol: "GSx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn hdx() -> Self {
        Metadata {
            address: ADDRESS_HDX.to_string(),
            name: "Home Depot xStock".to_string(),
            symbol: "HDx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn honx() -> Self {
        Metadata {
            address: ADDRESS_HONX.to_string(),
            name: "Honeywell xStock".to_string(),
            symbol: "HONx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn intcx() -> Self {
        Metadata {
            address: ADDRESS_INTCX.to_string(),
            name: "Intel xStock".to_string(),
            symbol: "INTCx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn ibmx() -> Self {
        Metadata {
            address: ADDRESS_IBMX.to_string(),
            name: "International Business Machines xStock".to_string(),
            symbol: "IBMx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn jnjx() -> Self {
        Metadata {
            address: ADDRESS_JNJX.to_string(),
            name: "Johnson & Johnson xStock".to_string(),
            symbol: "JNJx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn jpmx() -> Self {
        Metadata {
            address: ADDRESS_JPMX.to_string(),
            name: "JPMorgan Chase xStock".to_string(),
            symbol: "JPMx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn linx() -> Self {
        Metadata {
            address: ADDRESS_LINX.to_string(),
            name: "Linde xStock".to_string(),
            symbol: "LINx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn mrvlx() -> Self {
        Metadata {
            address: ADDRESS_MRVLX.to_string(),
            name: "Marvell xStock".to_string(),
            symbol: "MRVLx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn max() -> Self {
        Metadata {
            address: ADDRESS_MAX.to_string(),
            name: "Mastercard xStock".to_string(),
            symbol: "MAx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn mcdx() -> Self {
        Metadata {
            address: ADDRESS_MCDX.to_string(),
            name: "McDonald's xStock".to_string(),
            symbol: "MCDx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn mdtx() -> Self {
        Metadata {
            address: ADDRESS_MDTX.to_string(),
            name: "Medtronic xStock".to_string(),
            symbol: "MDTx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn mrkx() -> Self {
        Metadata {
            address: ADDRESS_MRKX.to_string(),
            name: "Merck xStock".to_string(),
            symbol: "MRKx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn mstrx() -> Self {
        Metadata {
            address: ADDRESS_MSTRX.to_string(),
            name: "MicroStrategy xStock".to_string(),
            symbol: "MSTRx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn qqqx() -> Self {
        Metadata {
            address: ADDRESS_QQQX.to_string(),
            name: "Nasdaq xStock".to_string(),
            symbol: "QQQx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn nflxx() -> Self {
        Metadata {
            address: ADDRESS_NFLXX.to_string(),
            name: "Netflix xStock".to_string(),
            symbol: "NFLXx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn nvox() -> Self {
        Metadata {
            address: ADDRESS_NVOX.to_string(),
            name: "Novo Nordisk xStock".to_string(),
            symbol: "NVOx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn openx() -> Self {
        Metadata {
            address: ADDRESS_OPENX.to_string(),
            name: "OPEN xStock".to_string(),
            symbol: "OPENx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn orclx() -> Self {
        Metadata {
            address: ADDRESS_ORCLX.to_string(),
            name: "Oracle xStock".to_string(),
            symbol: "ORCLx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn pltrx() -> Self {
        Metadata {
            address: ADDRESS_PLTRX.to_string(),
            name: "Palantir xStock".to_string(),
            symbol: "PLTRx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn pepx() -> Self {
        Metadata {
            address: ADDRESS_PEPX.to_string(),
            name: "PepsiCo xStock".to_string(),
            symbol: "PEPx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn pfex() -> Self {
        Metadata {
            address: ADDRESS_PFEX.to_string(),
            name: "Pfizer xStock".to_string(),
            symbol: "PFEx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn pmx() -> Self {
        Metadata {
            address: ADDRESS_PMX.to_string(),
            name: "Philip Morris xStock".to_string(),
            symbol: "PMx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn pgx() -> Self {
        Metadata {
            address: ADDRESS_PGX.to_string(),
            name: "Procter & Gamble xStock".to_string(),
            symbol: "PGx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn hoodx() -> Self {
        Metadata {
            address: ADDRESS_HOODX.to_string(),
            name: "Robinhood xStock".to_string(),
            symbol: "HOODx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn crmx() -> Self {
        Metadata {
            address: ADDRESS_CRMX.to_string(),
            name: "Salesforce xStock".to_string(),
            symbol: "CRMx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn spyx() -> Self {
        Metadata {
            address: ADDRESS_SPYX.to_string(),
            name: "SP500 xStock".to_string(),
            symbol: "SPYx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn strcx() -> Self {
        Metadata {
            address: ADDRESS_STRCX.to_string(),
            name: "Strategy PP Variable xStock".to_string(),
            symbol: "STRCx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn tbllx() -> Self {
        Metadata {
            address: ADDRESS_TBLLX.to_string(),
            name: "TBLL xStock".to_string(),
            symbol: "TBLLx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn tmox() -> Self {
        Metadata {
            address: ADDRESS_TMOX.to_string(),
            name: "Thermo Fisher xStock".to_string(),
            symbol: "TMOx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn tonxx() -> Self {
        Metadata {
            address: ADDRESS_TONXX.to_string(),
            name: "TON xStock".to_string(),
            symbol: "TONXx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn tqqqx() -> Self {
        Metadata {
            address: ADDRESS_TQQQX.to_string(),
            name: "TQQQ xStock".to_string(),
            symbol: "TQQQx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn unhx() -> Self {
        Metadata {
            address: ADDRESS_UNHX.to_string(),
            name: "UnitedHealth xStock".to_string(),
            symbol: "UNHx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn vtix() -> Self {
        Metadata {
            address: ADDRESS_VTIX.to_string(),
            name: "Vanguard xStock".to_string(),
            symbol: "VTIx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn vx() -> Self {
        Metadata {
            address: ADDRESS_VX.to_string(),
            name: "Visa xStock".to_string(),
            symbol: "Vx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
    pub fn wmtx() -> Self {
        Metadata {
            address: ADDRESS_WMTX.to_string(),
            name: "Walmart xStock".to_string(),
            symbol: "WMTx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/TODO".to_string(),
        }
    }
}
