<template>
  <!-- <Tutorial/> -->
  <div id="index">
    <!-- home section start -->
    <section class="home" id="home">
        <div class="max-width">
            <div class="home-content">
                <div class="text-1">Bonjour, je m'appelle</div>
                <div class="text-2">Cédrik Doddé</div>
                <div class="text-3">Et je suis un <span class="typing"></span></div>
                <a href="profil">Voir mon profil</a>
            </div>
        </div>
    </section>

    <!-- about section start -->
    <section class="about main-top" id="about">
        <div class="max-width">
            <h2 class="title title-home">BTS SIO</h2>
            <div class="about-content">
                <div class="column left">
                    <img src="~/assets/images/bts.png" alt="bts sio">
                </div>
                <div class="column right">
                    <div class="text">Qu'est-ce que le BTS SIO ?</div>
                    <p>Le Brevet de Technicien Supérieur Services informatique aux Organisations (SIO) est un diplôme reconnu par l’état de
                        niveau Bac+2. Il s’adresse à ceux qui souhaitent se former en deux ans aux métiers d’administrateur réseau ou de développeur
                        pour intégrer directement le marché du travail ou continuer des études dans le domaine de l’informatique.</p>
                    <p>Le BTS SIO propose deux (02) spécialités bien distinctes : l'option <b>SISR</b> et l'option <b>SLAM</b>.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- contact section start -->
    <div class="contact main-bottom" id="contact">
        <div class="max-width">
            <div class="contact-content">
                <div class="column left">
                    <div class="text">Option SISR</div>
                    <p>L’acronyme SISR signifie « Solutions d’infrastructure, systèmes et réseaux ». Voici quelques indications sur
                    cette première option du BTS SIO, ainsi des précisions sur cette formation et ses débouchés.</p>
                    <p>Dans cette option, le titulaire du diplôme participe à la production et à la fourniture de services en réalisant
                    ou en adaptant des solutions d’infrastructure et en assurant le fonctionnement optimal des équipements et des
                    services informatiques.</p>
                    <p>Les débouchés d'un BTS SIO SISR sont entre autres :</p>
                    <ul class="list-metiers">
                        <li>administrateur systèmes et réseaux</li>
                        <li>administrateur sécurité</li>
                        <li>technicien d’infrastructure</li>
                        <li>technicien de maintenance</li>
                        <li>technicien réseaux – télécoms</li>
                        <li>technicien développement – exploitation</li>
                        <li>technicien support et déploiement</li>
                        <li>technicien systèmes et réseaux</li>
                    </ul>
                </div>
                <div class="column right">
                    <div class="text">Option SLAM</div>
                    <p>L’acronyme SLAM signifie «Solutions Logicielles et Applications Métier». Voici quelques indications sur
                    cette seconde option du BTS SIO, ainsi des précisions sur cette formation et ses débouchés.</p>
                    <p>Dans cette option, le titulaire du diplôme participe à la production et à la fourniture de services en
                    développant, en adaptant ou en maintenant des solutions applicatives.</p>
                    <br />
                    <p>Les débouchés d'un BTS SIO SLAM sont entre autres :</p>
                    <ul class="list-metiers">
                        <li>analyste d'applications</li>
                        <li>analyste programmeur</li>
                        <li>chargé d'études informatiques</li>
                        <li>développeur d'applications informatiques</li>
                        <li>développeur d’applications mobiles</li>
                        <li>technicien développement – exploitation</li>
                        <li>développeur Web</li>
                        <li>responsable des services applicatifs</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="img-index">
            <img src="~/assets/images/bts-sio.png" alt="Blocs de compétences BTS SIO">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  transition: 'page'
//   layout: 'navBarre'
}
</script>

<style>
.slide-bottom-enter-page,
.slide-bottom-leave-page {
  transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
}
.slide-bottom-enter,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translate3d(0, 15px, 0);
}
</style>
