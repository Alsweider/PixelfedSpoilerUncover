// ==UserScript==
// @name         Pixelfed Spoiler Uncover
// @namespace    http://tampermonkey.net/
// @version      0.0.3
// @description  Automatically reveals spoiler content on Pixelfed by clicking the "See Post" button.
// @author       Alsweider
// Change URL to match your Pixelfed instance:
// @match        *://pixelfed.ru/*
// @match *://pixelfed.ru/*
// @match *://pixelfed.social/*
// @match *://pixelfed.de/*
// @match *://eorzea.photos/*
// @match *://pixey.org/*
// @match *://pxlmo.com/*
// @match *://metapixl.com/*
// @match *://pixelfed.tokyo/*
// @match *://pixelfed.fi/*
// @match *://pixel.tchncs.de/*
// @match *://luzeed.org/*
// @match *://pixelfed.au/*
// @match *://pixelfed.art/*
// @match *://fedisnap.com/*
// @match *://pixel.livellosegreto.it/*
// @match *://pixelfed.com.tr/*
// @match *://hidden.pics/*
// @match *://cro.pics/*
// @match *://7graphics.art/*
// @match *://pix.ublog.tech/*
// @match *://pixtagram.social/*
// @match *://pixelfed.cz/*
// @match *://pixelfedapp.uk/*
// @match *://pixelfed.automat.click/*
// @match *://pixelfed.eus/*
// @match *://pixelfed.lovetux.net/*
// @match *://sajin.life/*
// @match *://pix.diaspodon.fr/*
// @match *://gear.pictures/*
// @match *://gpose.site/*
// @match *://anar.chi.st/*
// @match *://pixel.infosec.exchange/*
// @match *://bolha.photos/*
// @match *://pixelfed.scot/*
// @match *://shared.graphics/*
// @match *://pixelfed.eu/*
// @match *://pixel.pol.social/*
// @match *://pixelfed.jascha.wtf/*
// @match *://pics.80px.com/*
// @match *://pics.gayfr.online/*
// @match *://pixelfed.furryfandom.me/*
// @match *://pi.dead.guru/*
// @match *://pixelfed.nz/*
// @match *://pix.famichiki.jp/*
// @match *://pixel.tiggi.es/*
// @match *://fotofed.nl/*
// @match *://faf.photos/*
// @match *://pixelfur.maw.best/*
// @match *://pix.anduin.net/*
// @match *://pixelfed.cafe/*
// @match *://pixelfed.photos/*
// @match *://picto.anartist.org/*
// @match *://rly.at/*
// @match *://pix.mastodont.cat/*
// @match *://pixl.fi/*
// @match *://digitalcourage.photo/*
// @match *://www.polylux.xyz/*
// @match *://pixel.redsnake.io/*
// @match *://mountains.photos/*
// @match *://pixelfed.raoull.org/*
// @match *://pix.calculate.social/*
// @match *://instafops.net/*
// @match *://antigram.org/*
// @match *://pixel.johalla.org/*
// @match *://kinkpic.site/*
// @match *://dogs.photos/*
// @match *://pix.toot.wales/*
// @match *://woodwideweb.social/*
// @match *://insta.landofkittens.social/*
// @match *://pixel.gruene.social/*
// @match *://pixelfed.co.za/*
// @match *://pix.myrkit.com/*
// @match *://pellicule.bim.land/*
// @match *://pixelfed.in.ua/*
// @match *://pix.tedomum.net/*
// @match *://pixelfed.lt/*
// @match *://polaroid.absturztau.be/*
// @match *://pixelis.luisa.is/*
// @match *://pixelfed.moe/*
// @match *://kave.kibbutz.gay/*
// @match *://pxl.roflcopter.fr/*
// @match *://pixel.aldiserver.de/*
// @match *://px.fux.is/*
// @match *://monkey.tunk.org/*
// @match *://pixelfed.gdgd.jp.net/*
// @match *://playset.social/*
// @match *://pixelfed.cat/*
// @match *://p.talesbythewanderer.com/*
// @match *://pixelfed.graz.social/*
// @match *://oceanvibe.nz/*
// @match *://liminalgici.spacc.eu.org/*
// @match *://chueok.pics/*
// @match *://zarapito.cl/*
// @match *://gal.muri.zip/*
// @match *://pixel.sp-codes.de/*
// @match *://www.ams.su/*
// @match *://pixelfed.babb.no/*
// @match *://pic.mascodon.jp/*
// @match *://guistingram.giom.fr/*
// @match *://pixels.gsi.li/*
// @match *://pixelfed.se/*
// @match *://pixelfed.snowhouse.noho.st/*
// @match *://fedipix.de/*
// @match *://pf.xese.in/*
// @match *://pixel.geekyboo.net/*
// @match *://pixfd.com/*
// @match *://pixels.stocksfamily.online/*
// @match *://photocave.net/*
// @match *://pix.3zi.ru/*
// @match *://pix.trom.tf/*
// @match *://pixelfed.festnoz.de/*
// @match *://pixelfed.pix-n-chill.fr/*
// @match *://pf.floofy.city/*
// @match *://khw-pixelfed.archeron.eu/*
// @match *://px.signboard.fun/*
// @match *://pics.brocolis.party/*
// @match *://pix.freiraumzittau.de/*
// @match *://pixelfed.rzgierskopp.de/*
// @match *://foto.libre.bzh/*
// @match *://zug.gallery/*
// @match *://pixelfed.louy.social/*
// @match *://pixelfed.judesign.vision/*
// @match *://pix.zeroes.ca/*
// @match *://usuzakuraya.us/*
// @match *://pixelfed.imagisphe.re/*
// @match *://miniature.photography/*
// @match *://photo.myocci.social/*
// @match *://mental.camp/*
// @match *://holopics.imperialba.se/*
// @match *://paw.photo/*
// @match *://pixelfed.flawbee.net/*
// @match *://samariter.social/*
// @match *://analog.am/*
// @match *://pxl.mx/*
// @match *://pixelfed.eticadigital.eu/*
// @match *://pixel.alphonso.fr/*
// @match *://pix.sekretaerbaer.net/*
// @match *://pet.tax/*
// @match *://social.gabisonntag.art/*
// @match *://pixelfed.qayamat.se/*
// @match *://pixelfed.tal.org/*
// @match *://pic.fossdle.org/*
// @match *://pxlfed.de/*
// @match *://pff.o.hina.dev/*
// @match *://exercise.cafe/*
// @match *://bonn.pics/*
// @match *://pixelfed.bachgau.social/*
// @match *://pix.berdaguermontes.eu/*
// @match *://pix.racoon.social/*
// @match *://pixel.kapteinis.lv/*
// @match *://brien.hosted.spacebear.ee/*
// @match *://pixel.aire.ml/*
// @match *://pixel.nobigtech.es/*
// @match *://pixelfed.seceric.io/*
// @match *://px.c-p-b.com/*
// @match *://justsome.photos/*
// @match *://gregism.com/*
// @match *://onepicaday.com/*
// @match *://photofed.world/*
// @match *://offroad.town/*
// @match *://nyan.pics/*
// @match *://pixelfed.debian.social/*
// @match *://staging.pixelfed.net/*
// @match *://life.19130104.xyz/*
// @match *://elsie.photo/*
// @match *://pixels.pks.ai/*
// @match *://pixel.molea.cloud/*
// @match *://pixel.moahr.de/*
// @match *://pix.unchat.cat/*
// @match *://microhive.org/*
// @match *://pixelfed.vajonet.org/*
// @match *://jamesgallagher.photos/*
// @match *://pixel.krivokuca.dev/*
// @match *://maestas.photos/*
// @match *://obscura-px.work/*
// @match *://pixel.winklerfamilie.eu/*
// @match *://pixelfed.laparsse.ynh.fr/*
// @match *://lifeof.ahabitual.dev/*
// @match *://pix.durehed.se/*
// @match *://pixel.sadrarin.com/*
// @match *://pixelfed.somamis.it/*
// @match *://pixelfed.badabam.net/*
// @match *://pix.norse.social/*
// @match *://art.glitch.monster/*
// @match *://pix.mattedwards.org/*
// @match *://pixelfed.anthropi.st/*
// @match *://pics.rys.io/*
// @match *://pixelfed.spiezmaestro.ch/*
// @match *://pix.novababilonia.me/*
// @match *://pics.cadenluxe.com/*
// @match *://pixelfed.mrak.at/*
// @match *://pixelfed.techhangout.social/*
// @match *://pixelfed.pikaböl.se/*
// @match *://pixel.polli.social/*
// @match *://pxl.dead.rodeo/*
// @match *://pixelfed.retronerd.at/*
// @match *://pixelfed.takeko.cyou/*
// @match *://art.librepunk.club/*
// @match *://pixelfed.hylobatidae.org/*
// @match *://photos.racf.guru/*
// @match *://photos.tsrats.net/*
// @match *://pixelfed.krebos.nl/*
// @match *://insta.sakuragawa.moe/*
// @match *://art.gnieh.org/*
// @match *://galaxypaws.page/*
// @match *://image.medienzentrum.rocks/*
// @match *://pics.voiceover.bar/*
// @match *://pic.krashboyz.org/*
// @match *://bild.maechler.cloud/*
// @match *://pixel.internationalotaku.com/*
// @match *://pixelfed.sysctl.io/*
// @match *://pix.hilles.space/*
// @match *://pixel.xarxa.cloud/*
// @match *://pixelfd.io/*
// @match *://pixelpost.uk/*
// @match *://pixelfed.anzui.dev/*
// @match *://pixelfed.yojik.net/*
// @match *://crafty.social/*
// @match *://p.floyd.dk/*
// @match *://pixel.fedifriends.social/*
// @match *://pixel.maik.ch/*
// @match *://pixels.techtransthai.org/*
// @match *://pix.simounet.net/*
// @match *://pixelfed.winscloud.net/*
// @match *://pixelaero.net/*
// @match *://tmi.pics/*
// @match *://pixelfed.hopeinthefield.net/*
// @match *://pictureofreality.com/*
// @match *://pixelfed.pandainthecloud.de/*
// @match *://pix.glauca.space/*
// @match *://pix.securelab.eu/*
// @match *://photos.poprox.group/*
// @match *://pixel.maddie.info/*
// @match *://photos.irregular.space/*
// @match *://piconic.co/*
// @match *://pxfd.t-rg.ws/*
// @match *://pixel.hurel.me/*
// @match *://klein.social/*
// @match *://media.lukeog.com/*
// @match *://idar.us/*
// @match *://stories.ahlroos.me/*
// @match *://pixel.rochacbruno.com/*
// @match *://pxlfd.fun.systems/*
// @match *://arti.stic.earth/*
// @match *://post.anteumbra.art/*
// @match *://pixel.d3fc0n.one/*
// @match *://maciek.pics/*
// @match *://cascadia.fun/*
// @match *://graffiti.photo/*
// @match *://px.micmun.de/*
// @match *://photos.deathbycomputers.co.uk/*
// @match *://pixelfed.fixerupper.me/*
// @match *://cdrum.photos/*
// @match *://pixelfed.maplatefor.me/*
// @match *://pixel.balamb.fr/*
// @match *://pixel.aschwege.me/*
// @match *://pixelfed.stevex.online/*
// @match *://overcomplicated.systems/*
// @match *://pixelfed.chuggybumba.com/*
// @match *://pixelfed.kollar.cloud/*
// @match *://pix.m1n1ster.com/*
// @match *://onlyfriends.social/*
// @match *://pixelfed.podycust.co.uk/*
// @match *://chicklens.foolbazar.eu/*
// @match *://sidehearts.com/*
// @match *://pixelfed.wildsplash.photography/*
// @match *://pix.bothhands.ca/*
// @match *://pixelfed.xorp.hu/*
// @match *://brioco.art/*
// @match *://pix.shirtless.gay/*
// @match *://fedi.7graphics.studio/*
// @match *://uncensored.photos/*
// @match *://breeze.pictures/*
// @match *://pixelfed.gouacheairship.com/*
// @match *://vanilla.choco.ink/*
// @match *://pixel.bascht.space/*
// @match *://literally.pictures/*
// @match *://pixelfed.am-networks.fr/*
// @match *://pixelfed.mrpetovan.com/*
// @match *://onlynugs.net/*
// @match *://pix.josh.tel/*
// @match *://photofeed.social/*
// @match *://grams.mat.hew.cloud/*
// @match *://pxl.bub.org/*
// @match *://pix.norbipeti.eu/*
// @match *://picture.veen.world/*
// @match *://biketravel.photos/*
// @match *://fedi.stuvel.eu/*
// @match *://pixelfed.dinn.ca/*
// @match *://pixelfed.chrisalemany.ca/*
// @match *://pixel.bluemedia.dev/*
// @match *://pixelfed.pu2ttz.app.br/*
// @match *://photo.lapineige.fr/*
// @match *://photos.mroberts.me/*
// @match *://pix.metaversum.wtf/*
// @match *://fauxtographer.ca/*
// @match *://pix.9wd.eu/*
// @match *://pix.unixcat.net/*
// @match *://display.whenpeople.live/*
// @match *://pixls.courat.fr/*
// @match *://pixel.vyizis.tech/*
// @match *://pixel.pnyhf.eu/*
// @match *://pixel.michel.uber.space/*
// @match *://hitsuji.cloud/*
// @match *://pixel.fedisphere.net/*
// @match *://snap.neovibe.app/*
// @match *://pixelfed.ethibox.fr/*
// @match *://alpaca.dad/*
// @match *://pixelfed.hamdorf.org/*
// @match *://pixelfed.helvetet.eu/*
// @match *://libertynode.cam/*
// @match *://pixelfed.rhetro.de/*
// @match *://pix.webm.ink/*
// @match *://pixelfed.crimedad.work/*
// @match *://pixel.everythingbagel.me/*
// @match *://photos.heath.social/*
// @match *://kvasir.lanofthedead.xyz/*
// @match *://pixel.kjz.ca/*
// @match *://pixels.jdt.io/*
// @match *://pics.chiefgyk3d.com/*
// @match *://dogo.pictures/*
// @match *://pix.miri64.xyz/*
// @match *://pix.shikiryu.ovh/*
// @match *://pix.ismus.net/*
// @match *://choom.club/*
// @match *://lilienthal.pics/*
// @match *://pixel.art3mis.de/*
// @match *://dealbhan.co-shaoghal.net/*
// @match *://pix.kestrelsnest.social/*
// @match *://photo.horslimites.org/*
// @match *://pixelfed.lundgrensjostrom.com/*
// @match *://pix.io18.top/*
// @match *://bridport.pics/*
// @match *://japix.schuerz.at/*
// @match *://pixelfed.cc/*
// @match *://pixelfed.cats-home.net/*
// @match *://pics.spielenmitlili.com/*
// @match *://pixels.guaranteedstruggle.host/*
// @match *://straightouttacotton.com/*
// @match *://kooktzi.ch/*
// @match *://pixel.sebastianwieser.de/*
// @match *://blacksun.snowcrash.ovh/*
// @match *://bilder.kwk21.de/*
// @match *://pf.nobl.ink/*
// @match *://life.omx.ch/*
// @match *://sosialt.datasenter.drammen.no/*
// @match *://pix.closeuprussia.com/*
// @match *://pics.rq.sg/*
// @match *://pixelfed.desmu.fr/*
// @match *://pixel.z4i.ru/*
// @match *://pix.multimob.be/*
// @match *://pixelfed.rlp.schule/*
// @match *://pixelfed.rittenserver.synology.me/*
// @match *://pxlfd.dsnv.net/*
// @match *://pixelfassa.de/*
// @match *://kaartinen.photos/*
// @match *://photos.brokenbydesign.org/*
// @match *://pix.nixt.de/*
// @match *://pixel.cloud.nerdraum.de/*
// @match *://pix.nah.re/*
// @match *://photo.syslog.eu/*
// @match *://pixel.webschneider.org/*
// @match *://pixelfed.21314.de/*
// @match *://fotos.lukas-schieren.de/*
// @match *://pixelfed.cyberveins.eu/*
// @match *://pixelfed.tnxip.de/*
// @match *://gram.ello.tech/*
// @match *://pixelfed.v.st/*
// @match *://pixel.whisper.tf/*
// @match *://pixelfed.zwerfcat.world/*
// @match *://pix.0m.ax/*
// @match *://pixelfed.xm1.de/*
// @match *://pix.thedav.is/*
// @match *://pixelfed.services.coupou.fr/*
// @match *://photos.cookiefan.club/*
// @match *://pxl.softmetz.de/*
// @match *://pixel.bimbiribase.xyz/*
// @match *://sovran.photos/*
// @match *://pix.rheall.me/*
// @match *://kainehm.com/*
// @match *://pixelfed.sandbox.connection.fr/*
// @match *://fed.dddug.in/*
// @match *://pixelpups.place/*
// @match *://pix.brass.host/*
// @match *://photos.skrasek.us/*
// @match *://pix.gemnoc.ca/*
// @match *://sights.omgwars.com/*
// @match *://pix.solarpunk.land/*
// @match *://pixelfed.virusschleuder.de/*
// @match *://elbfotos.de/*
// @match *://tuluk.nl/*
// @match *://pixelfed.vpx.moe/*
// @match *://toyvey.xyz/*
// @match *://shot.thiemoo.at/*
// @match *://hindsightt.social/*
// @match *://buns.work/*
// @match *://photos.kurau.tokyo/*
// @match *://pixelfed.nakamura.io/*
// @match *://pix.mexibang.com/*
// @match *://photos.adlerhorst.net/*
// @match *://pix.hackerbun.social/*
// @match *://pixel.mrrl.me/*
// @match *://ricko.photos/*
// @match *://insta.razve.net/*
// @match *://pictures.yidhra.farm/*
// @match *://pixel.nx-pod.de/*
// @match *://pixelfed.fotosleben.art/*
// @match *://pix.darkou.fr/*
// @match *://fotos.dresden.network/*
// @match *://pixelfed.eigenlab.org/*
// @match *://pixel.crcmz.me/*
// @match *://pixel.markbrouch.com/*
// @match *://pixelfed.calemooth.com/*
// @match *://photos.mattbowen.net/*
// @match *://pixelfed.zwoelfdreifuenfundvierzig.net/*
// @match *://photos.communitymedia.video/*
// @match *://pixel.felunis.de/*
// @match *://pixelfed.dynlinux.io/*
// @match *://click.unternet.org/*
// @match *://photos.xavs.ca/*
// @match *://pix.mornie.org/*
// @match *://pix.weanimatethings.com/*
// @match *://pixelfed.tekdmn.me/*
// @match *://pixelfed.techtriage.guru/*
// @match *://social.irinadragos.co.uk/*
// @match *://pix.solarpunk.moe/*
// @match *://pixel.staging.balamb.fr/*
// @match *://photolovers.net/*
// @match *://px.filmfreedom.net/*
// @match *://mediocre.photos/*
// @match *://scookeoni.com/*
// @match *://pixel.3xd.eu/*
// @match *://3dart.social/*
// @match *://pixelfed.aargaunet.ch/*
// @match *://pixel.orgdup.net/*
// @match *://cybergram.art/*
// @match *://pixel.tiny-host.nl/*
// @match *://pixelfed.cloudron.io/*
// @match *://photos.apokrupha.com/*
// @match *://federated.photos/*
// @match *://pixelfed.l0g.is/*
// @match *://pix.salocin.eu/*
// @match *://twincities.photo/*
// @match *://roland.club/*
// @match *://pixelfed.kolosowscy.pl/*
// @match *://very.photos/*
// @match *://pixelfed.lqx.net/*
// @match *://family.awcook.com/*
// @match *://hofund.berzerk.pl/*
// @match *://pixelfed.tcjc.uk/*
// @match *://pixelfed.noellabo.jp/*
// @match *://hacker.photos/*
// @match *://pixelfed.f4n.de/*
// @match *://pixelfed.amaseto.com/*
// @match *://pix.domanske.de/*
// @match *://fruitingbodies.xyz/*
// @match *://pixel.brettspielpony.de/*
// @match *://tonybark.art/*
// @match *://pixelfed.mayer.rocks/*
// @match *://pics.chez.gay/*
// @match *://pixel.easter.fr/*
// @match *://pixel.simplex-software.ru/*
// @match *://pix.lalafell.org/*
// @match *://eikon.refchat.net/*
// @match *://pixelfed.coupou.fr/*
// @match *://photos.peacememori.es/*
// @match *://pixel.sb.communia.org/*
// @match *://pix.yapbreak.fr/*
// @match *://pixelfed.uno/*
// @match *://gram.social/*
// @match *://pixelfed.fr/*
// @match *://social.photo/*
// @match *://pixelfed.dk/*
// @match *://kinkpic.com/*
// @match *://exposur.es/*
// @grant        none
// @license      MIT
// @downloadURL https://update.greasyfork.org/scripts/504635/Pixelfed%20Spoiler%20Uncover.user.js
// @updateURL https://update.greasyfork.org/scripts/504635/Pixelfed%20Spoiler%20Uncover.meta.js
// ==/UserScript==

(function() {
    'use strict';

    //Funktion zum Aufdecken des Spoilers durch Klicken des "See Post"-Buttons
    function uncoverSpoilers() {
        //Suche nach allen "See Post"-Buttons
        const buttons = document.querySelectorAll('button.btn-outline-light');

        //Gehe durch jeden Button und simuliere einen Klick
        buttons.forEach(button => {
            if (button && button.textContent.includes('See Post')) {
                button.click();
            }
        });
    }

    //Rufe die Funktion beim Laden der Seite auf
    window.addEventListener('load', uncoverSpoilers);

    //Event-Listener für dynamisch geladene Inhalte (z.B. beim Scrollen)
    const observer = new MutationObserver(uncoverSpoilers);
    observer.observe(document, { childList: true, subtree: true });

})();
