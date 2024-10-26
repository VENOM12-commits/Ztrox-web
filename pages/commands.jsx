import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

export default function Commands() {
const commands = [
  "/afk",
  "/aşk-ölçer",
  "/avatar",
  "/ayarlar",
  "/ban",
  "/ban-list",
  "/banner",
  "/botlist-ayarla",
  "/buton-rol",
  "/capslock-engel",
  "/çekiliş",
  "/davet",
  "/davet-sistemi",
  "/dogruluk-cesaret",
  "/embed-oluştur",
  "/emoji-çek",
  "/emoji-ekle",
  "/forceban",
  "/gelişmiş-sunucu-kur",
  "/giriş-çıkış",
  "/giriş-çıkış-kapat",
  "/giriş-çıkış-mesaj",
  "/giriş-çıkış-resim",
  "/güncelleme",
  "/hesap-koruma",
  "/istatistik",
  "/kanal-açıklama",
  "/kayıt",
  "/kayıt-sistemi",
  "/kayıt-sistemi-kapat",
  "/kick",
  "/kilitle",
  "/koruma-sistemleri",
  "/kullanıcı-bilgi",
  "/kurucu",
  "/küfür-engel",
  "/level",
  "/level-ekle",
  "/level-kaldır",
  "/level-log",
  "/level-sıralaması",
  "/level-sistemi",
  "/medya-kanalı",
  "/medya-kanalı-sıfırla",
  "/mod-log",
  "/mute",
  "/mute-ayar",
  "/mute-sistemi",
  "/mute-sistemi-sıfırla",
  "/oto-rol",
  "/oto-rol-kapat",
  "/oto-tag",
  "/oto-tag-kapat",
  "/oylama",
  "özel-komut",
  "/özel-oda-aç",
  "/özel-oda-menü",
  "/özel-oda-sil",
  "/ping",
  "/reklam-engel",
  "/resimli-giriş-çıkış",
  "/rol-al",
  "/rol-oluştur",
  "/rol-ver",
  "/sa-as",
  "/say",
  "/sayaç",
  "/sayaç-kapat",
  "/sil",
  "/spam-engel",
  "/sunucu-banner",
  "/sunucu-bilgi",
  "/sunucu-pp",
  "/ticket-sistemi",
  "/ticket-sistemi-sıfırla",
  "/unban",
  "/unmute",
  "/xp-ekle",
  "/xp-kaldır",
  "/yardım",
  "/yasaklı-kelime",
  "/yasaklı-kelime-sıfırla",
  "/yavaş-mod",
  "/yaz",








];

  return (
    <>
      <div>
      <div className="flex w-full justify-center">
      <img width="500" src="/img/bck2.png" />
      </div>
        <p className="text-xl font-medium text-white">
          <i className="fal fa-cogs text-amber-400 mr-2" />
         Ztrox Commands
        </p>
        <p className="text-white text-sm text-opacity-50 mb-5">
        You can get information about the commands of the Ztrox
        </p>

        <div>
          <Menu as="div" className="w-full relative inline-block text-left">
          <div>
              <Menu.Button className="left-0 transition w-full duration-200 hover:bg-opacity-50 bg-black bg-opacity-30 text-white focus:text-amber-400 rounded-xl border border-white/10 focus:border-amber-400 focus:outline-none py-4 px-6 flex justify-between items-center">
                <div className="flex items-center gap-x-1 text-white text-opacity-60">
                 
                    <>
                      <i className="fa fa-hashtag text-white text-opacity-20" />
                     View Commands List
                    </>
                
                </div>
              </Menu.Button>
            </div>

            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="z-1 custom-scroll absolute left-0 w-full mt-2 origin-top-right bg-black overflow-auto max-h-60 border border-black border-opacity-20 bg-opacity-95 rounded-lg p-1">
                <div className="px-1 py-1 w-full">

            {commands.map(mm => (

                <Menu.Item>
                    <button className={`w-full rounded-lg p-2 cursor-pointer text-white flex items-center space-x-3 transition-all duration-200`}>
                    <>
                          <i className="fa-spin text-xl text-white text-opacity-20" />
                         {mm}</>
                    </button>
                    </Menu.Item>
            ))}
              
        </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <div className="animateHeader mt-10 flex flex-wrap items-center justify-center gap-x-4">
  
  <Link href={"https://discord.com/api/oauth2/authorize?client_id=774043716797071371&permissions=277028620608&scope=applications.commands%20bot"}>
  <a className={"flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " }>
Invite MusicMaker</a>
  </Link>

  <div className="py-10"></div>
  
  <Link href={"https://discord.gg/ZcDprCrFTn"}>
  <a className={" px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " }>
Support Server</a>
  </Link>

  <div className="py-10"></div>
  
  <Link href={"https://top.gg/bot/774043716797071371/vote"}>
  <a className={" px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " }>
Vote MusicMaker</a>
  </Link>
</div>

      </div>
      <div className="py-20"></div>
    </>
  )
  }
