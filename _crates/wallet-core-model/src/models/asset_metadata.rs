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
            logo_uri: "https://raw.githubusercontent.com/TheStableFoundation/notwallet/refs/heads/development/public/images/bach.png".to_string(),
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
            logo_uri: "https://raw.githubusercontent.com/TheStableFoundation/notwallet/refs/heads/development/public/images/jlp.png".to_string(),
        }
    }
    pub fn usdc() -> Self {
        Metadata {
            address: ADDRESS_USDC.to_string(),
            name: "USD Coin".to_string(),
            symbol: "USDC".to_string(),
            decimal: 6,
            logo_uri: "https://raw.githubusercontent.com/TheStableFoundation/notwallet/refs/heads/development/public/images/usdc.png".to_string(),
        }
    }
    pub fn usdt() -> Self {
        Metadata {
            address: ADDRESS_USDT.to_string(),
            name: "Tether USD".to_string(),
            symbol: "USDT".to_string(),
            decimal: 6,
            logo_uri: "https://raw.githubusercontent.com/TheStableFoundation/notwallet/refs/heads/development/public/images/usdt.png".to_string(),
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
            logo_uri: "https://raw.githubusercontent.com/TheStableFoundation/notwallet/refs/heads/development/public/images/usds.png".to_string(),
        }
    }
    pub fn usd1() -> Self {
        Metadata {
            address: ADDRESS_USD1.to_string(),
            name: "USD1".to_string(),
            symbol: "USD1".to_string(),
            decimal: 6,
            logo_uri: "https://raw.githubusercontent.com/TheStableFoundation/notwallet/refs/heads/development/public/images/usd1.png".to_string(),
        }
    }
    pub fn eurc() -> Self {
        Metadata {
            address: ADDRESS_EURC.to_string(),
            name: "Euro Coin".to_string(),
            symbol: "EURC".to_string(),
            decimal: 6,
            logo_uri: "https://raw.githubusercontent.com/TheStableFoundation/notwallet/refs/heads/development/public/images/eurc.png".to_string(),
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
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684bf6359f8fa1d916afe97b_Ticker%3DABT%2C%20Company%20Name%3DAbbot%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn abbvx() -> Self {
        Metadata {
            address: ADDRESS_ABBVX.to_string(),
            name: "AbbVie xStock".to_string(),
            symbol: "ABBVx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684be7c58986cdaeeee5bbba_Ticker%3DABBV%2C%20Company%20Name%3DSP500%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn acnx() -> Self {
        Metadata {
            address: ADDRESS_ACNX.to_string(),
            name: "Accenture xStock".to_string(),
            symbol: "ACNx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684c0b0e15af8be8257db52f_Ticker%3DACN%2C%20Company%20Name%3Daccenture%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn ambrx() -> Self {
        Metadata {
            address: ADDRESS_AMBRX.to_string(),
            name: "Amber xStock".to_string(),
            symbol: "AMBRx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/68652e463fd5d0c86d866c65_AMBRx.svg".to_string(),
        }
    }
    pub fn appx() -> Self {
        Metadata {
            address: ADDRESS_APPX.to_string(),
            name: "AppLovin xStock".to_string(),
            symbol: "APPx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684c0deccaecf631c0c174ea_Ticker%3DAPP%2C%20Company%20Name%3Dapp%20lovin%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn aznx() -> Self {
        Metadata {
            address: ADDRESS_AZNX.to_string(),
            name: "AstraZeneca xStock".to_string(),
            symbol: "AZNx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684bf47b066fa1085ae953e9_Ticker%3DAZN%2C%20Company%20Name%3Dastrazeneca%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn bacx() -> Self {
        Metadata {
            address: ADDRESS_BACX.to_string(),
            name: "Bank of America xStock".to_string(),
            symbol: "BACx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684bf5a74604b4f162fd0efd_Ticker%3DBAC%2C%20Company%20Name%3DBank%20of%20America%20Corporation%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn brk_bx() -> Self {
        Metadata {
            address: ADDRESS_BRK_BX.to_string(),
            name: "Berkshire Hathaway xStock".to_string(),
            symbol: "BRK.Bx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684ab977b76d1a151f09c858_Ticker%3DBRK.B%2C%20Company%20Name%3Dberkshire-hathaway%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn avgox() -> Self {
        Metadata {
            address: ADDRESS_AVGOX.to_string(),
            name: "Broadcom xStock".to_string(),
            symbol: "AVGOx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684aaef288f41927892d12c1_Ticker%3DAVGO%2C%20Company%20Name%3DBroadcom%20Inc.%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn cvxx() -> Self {
        Metadata {
            address: ADDRESS_CVXX.to_string(),
            name: "Chevron xStock".to_string(),
            symbol: "CVXx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684be50accfbb14c64319124_Ticker%3DCVX%2C%20Company%20Name%3Dchevron%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn crclx() -> Self {
        Metadata {
            address: ADDRESS_CRCLX.to_string(),
            name: "Circle xStock".to_string(),
            symbol: "CRCLx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/6861ae6944c62c8dd3a0e165_CRCLx.svg".to_string(),
        }
    }
    pub fn cscox() -> Self {
        Metadata {
            address: ADDRESS_CSCOX.to_string(),
            name: "Cisco xStock".to_string(),
            symbol: "CSCOx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684bec77bfaeef7ac61f7231_Ticker%3DCSCO%2C%20Company%20Name%3DCisco%20Systems%20Inc.%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn kox() -> Self {
        Metadata {
            address: ADDRESS_KOX.to_string(),
            name: "Coca-Cola xStock".to_string(),
            symbol: "KOx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684beb344604b4f162f66f93_Ticker%3DCOKE%2C%20Company%20Name%3DCokeCola%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn coinx() -> Self {
        Metadata {
            address: ADDRESS_COINX.to_string(),
            name: "Coinbase xStock".to_string(),
            symbol: "COINx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684c131b2d6d8cbe9e61a3dc_Ticker%3DCOIN%2C%20Company%20Name%3DCoinbase%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn cmcsax() -> Self {
        Metadata {
            address: ADDRESS_CMCSAX.to_string(),
            name: "Comcast xStock".to_string(),
            symbol: "CMCSAx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684bfbe3db57e5f5f6b277aa_Ticker%3DCMCSA%2C%20Company%20Name%3DComcast%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn crwdx() -> Self {
        Metadata {
            address: ADDRESS_CRWDX.to_string(),
            name: "CrowdStrike xStock".to_string(),
            symbol: "CRWDx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684c10fbaf9d90e3d974ae23_Ticker%3DCRWD%2C%20Company%20Name%3DCrowdstrike%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn dhrx() -> Self {
        Metadata {
            address: ADDRESS_DHRX.to_string(),
            name: "Danaher xStock".to_string(),
            symbol: "DHRx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684bfa59ce8102ff96cee2fe_Ticker%3DDHR%2C%20Company%20Name%3DSP500%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn dfdvx() -> Self {
        Metadata {
            address: ADDRESS_DFDVX.to_string(),
            name: "DFDV xStock".to_string(),
            symbol: "DFDVx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/6861b8b7beb9cf856e2332d5_DFDVx.svg".to_string(),
        }
    }
    pub fn llyx() -> Self {
        Metadata {
            address: ADDRESS_LLYX.to_string(),
            name: "Eli Lilly xStock".to_string(),
            symbol: "LLYx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684ad0eaa9a1efe9b1b7155a_Ticker%3DLLY%2C%20Company%20Name%3DLilly%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn xomx() -> Self {
        Metadata {
            address: ADDRESS_XOMX.to_string(),
            name: "Exxon Mobil xStock".to_string(),
            symbol: "XOMx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684abe960ee12e238c0a1f0b_Ticker%3DXOM%2C%20Company%20Name%3DExxonMobil%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn gmex() -> Self {
        Metadata {
            address: ADDRESS_GMEX.to_string(),
            name: "Gamestop xStock".to_string(),
            symbol: "GMEx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684c125f1c48a3dab4c66137_Ticker%3DGME%2C%20Company%20Name%3Dgamestop%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn gldx() -> Self {
        Metadata {
            address: ADDRESS_GLDX.to_string(),
            name: "Gold xStock".to_string(),
            symbol: "GLDx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/685123a7747987b071b10d47_Ticker%3DGLD%2C%20Company%20Name%3DGold%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn gsx() -> Self {
        Metadata {
            address: ADDRESS_GSX.to_string(),
            name: "Goldman Sachs xStock".to_string(),
            symbol: "GSx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684c114972ed2d868a1b3f95_Ticker%3DGS%2C%20Company%20Name%3DGoldman%20Sachs%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn hdx() -> Self {
        Metadata {
            address: ADDRESS_HDX.to_string(),
            name: "Home Depot xStock".to_string(),
            symbol: "HDx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684be484171c0a11201e098d_Ticker%3DHD%2C%20Company%20Name%3DHome%20Depot%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn honx() -> Self {
        Metadata {
            address: ADDRESS_HONX.to_string(),
            name: "Honeywell xStock".to_string(),
            symbol: "HONx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684c08d12385ea1da806a5bb_Ticker%3DHON%2C%20Company%20Name%3DSP500%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn intcx() -> Self {
        Metadata {
            address: ADDRESS_INTCX.to_string(),
            name: "Intel xStock".to_string(),
            symbol: "INTCx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684c0a334cac334b4a41651b_Ticker%3DINTC%2C%20Company%20Name%3DIntel%20Corp%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn ibmx() -> Self {
        Metadata {
            address: ADDRESS_IBMX.to_string(),
            name: "International Business Machines xStock".to_string(),
            symbol: "IBMx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684bfb32f7000e98d733283f_Ticker%3DIBM%2C%20Company%20Name%3DIBM%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn jnjx() -> Self {
        Metadata {
            address: ADDRESS_JNJX.to_string(),
            name: "Johnson & Johnson xStock".to_string(),
            symbol: "JNJx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684ace98941130a24503a315_Ticker%3DJNJ%2C%20Company%20Name%3Djohnson-johnson%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn jpmx() -> Self {
        Metadata {
            address: ADDRESS_JPMX.to_string(),
            name: "JPMorgan Chase xStock".to_string(),
            symbol: "JPMx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684acf34c10a7e0add155c61_Ticker%3DJPM%2C%20Company%20Name%3DJPMorganChase%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn linx() -> Self {
        Metadata {
            address: ADDRESS_LINX.to_string(),
            name: "Linde xStock".to_string(),
            symbol: "LINx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684bf2b1132313f4529a3160_Ticker%3DLIN%2C%20Company%20Name%3DSP500%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn mrvlx() -> Self {
        Metadata {
            address: ADDRESS_MRVLX.to_string(),
            name: "Marvell xStock".to_string(),
            symbol: "MRVLx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684c0eb412d3850c2c01cd29_Ticker%3DMRVL%2C%20Company%20Name%3DSP500%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn max() -> Self {
        Metadata {
            address: ADDRESS_MAX.to_string(),
            name: "Mastercard xStock".to_string(),
            symbol: "MAx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684ad1ca13c7aaa9ece4cbbf_Ticker%3DMA%2C%20Company%20Name%3DMastercard%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn mcdx() -> Self {
        Metadata {
            address: ADDRESS_MCDX.to_string(),
            name: "McDonald's xStock".to_string(),
            symbol: "MCDx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684bf77838b45bb94ff32be7_Ticker%3DMCD%2C%20Company%20Name%3DMcDonalds%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn mdtx() -> Self {
        Metadata {
            address: ADDRESS_MDTX.to_string(),
            name: "Medtronic xStock".to_string(),
            symbol: "MDTx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684bfc99a86580de629510e9_Ticker%3DMDT%2C%20Company%20Name%3DMedtronic%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn mrkx() -> Self {
        Metadata {
            address: ADDRESS_MRKX.to_string(),
            name: "Merck xStock".to_string(),
            symbol: "MRKx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684be6ff5bd0a5643adf85ec_Ticker%3DMRK%2C%20Company%20Name%3DMerck%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn mstrx() -> Self {
        Metadata {
            address: ADDRESS_MSTRX.to_string(),
            name: "MicroStrategy xStock".to_string(),
            symbol: "MSTRx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684c0d47eee3a9c3fa12475a_Ticker%3DMSTR%2C%20Company%20Name%3DMicroStrategy%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn qqqx() -> Self {
        Metadata {
            address: ADDRESS_QQQX.to_string(),
            name: "Nasdaq xStock".to_string(),
            symbol: "QQQx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/68511cb6e367f19f06664527_QQQx.svg".to_string(),
        }
    }
    pub fn nflxx() -> Self {
        Metadata {
            address: ADDRESS_NFLXX.to_string(),
            name: "Netflix xStock".to_string(),
            symbol: "NFLXx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684bf6c149d917d503f6cda6_Ticker%3DNFLX%2C%20Company%20Name%3DNetflix%20Inc.%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn nvox() -> Self {
        Metadata {
            address: ADDRESS_NVOX.to_string(),
            name: "Novo Nordisk xStock".to_string(),
            symbol: "NVOx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684bf139788d618501b65727_Ticker%3DNOVO_B%2C%20Company%20Name%3DSP500%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn openx() -> Self {
        Metadata {
            address: ADDRESS_OPENX.to_string(),
            name: "OPEN xStock".to_string(),
            symbol: "OPENx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/688cb3ec1f3801d9bc17729e_Ticker%3DOPENx%2C%20Company%20Name%3DOpendoor%2C%20Size%3D32x32.svg".to_string(),
        }
    }
    pub fn orclx() -> Self {
        Metadata {
            address: ADDRESS_ORCLX.to_string(),
            name: "Oracle xStock".to_string(),
            symbol: "ORCLx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684bf1ecae4eb4a817da9941_Ticker%3DORCL%2C%20Company%20Name%3DSP500%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn pltrx() -> Self {
        Metadata {
            address: ADDRESS_PLTRX.to_string(),
            name: "Palantir xStock".to_string(),
            symbol: "PLTRx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684c0c4c0e5466272c52958b_Ticker%3DPLTR%2C%20Company%20Name%3DSP500%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn pepx() -> Self {
        Metadata {
            address: ADDRESS_PEPX.to_string(),
            name: "PepsiCo xStock".to_string(),
            symbol: "PEPx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684be8662b90a208c5d5b8e5_Ticker%3DPEP%2C%20Company%20Name%3DPepsico%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn pfex() -> Self {
        Metadata {
            address: ADDRESS_PFEX.to_string(),
            name: "Pfizer xStock".to_string(),
            symbol: "PFEx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684be5e3c54ff3f5c6c9b36f_Ticker%3DPFE%2C%20Company%20Name%3Dpfizer%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn pmx() -> Self {
        Metadata {
            address: ADDRESS_PMX.to_string(),
            name: "Philip Morris xStock".to_string(),
            symbol: "PMx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684c0981cbec78a581a6bfe7_Ticker%3DPM%2C%20Company%20Name%3Dphilip%20morris%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn pgx() -> Self {
        Metadata {
            address: ADDRESS_PGX.to_string(),
            name: "Procter & Gamble xStock".to_string(),
            symbol: "PGx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684be3c6fa6a62fb260a51e3_Ticker%3DPG%2C%20Company%20Name%3DProctor%20%26%20Gamble%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn hoodx() -> Self {
        Metadata {
            address: ADDRESS_HOODX.to_string(),
            name: "Robinhood xStock".to_string(),
            symbol: "HOODx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684c0f39cede10b9afa4852f_Ticker%3DHOOD%2C%20Company%20Name%3DRobinhood%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn crmx() -> Self {
        Metadata {
            address: ADDRESS_CRMX.to_string(),
            name: "Salesforce xStock".to_string(),
            symbol: "CRMx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684bf3670e24ef4c92a6a7fc_Ticker%3DCRM%2C%20Company%20Name%3DSP500%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn spyx() -> Self {
        Metadata {
            address: ADDRESS_SPYX.to_string(),
            name: "SP500 xStock".to_string(),
            symbol: "SPYx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/685116624ae31d5ceb724895_Ticker%3DSPX%2C%20Company%20Name%3DSP500%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn strcx() -> Self {
        Metadata {
            address: ADDRESS_STRCX.to_string(),
            name: "Strategy PP Variable xStock".to_string(),
            symbol: "STRCx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/693d66a2b661bfc9971dcdac_Ticker%3DSTRCx%2C%20Company%20Name%3DStrategy%20PP%20Variable%2C%20Size%3D32x32.svg".to_string(),
        }
    }
    pub fn tbllx() -> Self {
        Metadata {
            address: ADDRESS_TBLLX.to_string(),
            name: "TBLL xStock".to_string(),
            symbol: "TBLLx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/688cb5a681cc1775c4cd3cae_Ticker%3DTBLLx%2C%20Company%20Name%3DInvesco%2C%20Size%3D32x32.svg".to_string(),
        }
    }
    pub fn tmox() -> Self {
        Metadata {
            address: ADDRESS_TMOX.to_string(),
            name: "Thermo Fisher xStock".to_string(),
            symbol: "TMOx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684bf4d930b0fdc50503056d_Ticker%3DTMO%2C%20Company%20Name%3DThermo_Fisher_Scientific%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn tonxx() -> Self {
        Metadata {
            address: ADDRESS_TONXX.to_string(),
            name: "TON xStock".to_string(),
            symbol: "TONXx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/68d7db29223cfd256ebb952c_Ticker%3DTONx%2C%20Company%20Name%3DTON%2C%20Size%3D32x32.svg".to_string(),
        }
    }
    pub fn tqqqx() -> Self {
        Metadata {
            address: ADDRESS_TQQQX.to_string(),
            name: "TQQQ xStock".to_string(),
            symbol: "TQQQx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/685125548a5829b9b59a6156_TQQQx.svg".to_string(),
        }
    }
    pub fn unhx() -> Self {
        Metadata {
            address: ADDRESS_UNHX.to_string(),
            name: "UnitedHealth xStock".to_string(),
            symbol: "UNHx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684abb4c69185d8a871e2ab5_Ticker%3DUNH%2C%20Company%20Name%3DUnited%20Health%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn vtix() -> Self {
        Metadata {
            address: ADDRESS_VTIX.to_string(),
            name: "Vanguard xStock".to_string(),
            symbol: "VTIx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/68511e335ee1314f602d9a7c_Ticker%3DVTI%2C%20Company%20Name%3DVanguard%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn vx() -> Self {
        Metadata {
            address: ADDRESS_VX.to_string(),
            name: "Visa xStock".to_string(),
            symbol: "Vx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684acfd76eb8395c6d1d2210_Ticker%3DV%2C%20Company%20Name%3DVisa%2C%20size%3D256x256.svg".to_string(),
        }
    }
    pub fn wmtx() -> Self {
        Metadata {
            address: ADDRESS_WMTX.to_string(),
            name: "Walmart xStock".to_string(),
            symbol: "WMTx".to_string(),
            decimal: 8,
            logo_uri: "https://cdn.prod.website-files.com/655f3efc4be468487052e35a/684bebd366d5089b2da3cf7e_Ticker%3DWMT%2C%20Company%20Name%3DWalmart%2C%20size%3D256x256.svg".to_string(),
        }
    }
}
