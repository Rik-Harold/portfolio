<template>
  <!-- <Tutorial/> -->
  <div  id="index">
    <!-- Nav barre -->
    <Header />

    <!-- home section start
    <transition name="entete">
        
    </transition> -->
    <section class="home" id="home">
        <div class="max-width">
            <transition name="entete">
                <div class="home-content">
                    <div class="text-1">Bonjour, je m'appelle</div>
                    <div class="text-2">Cédrik Doddé</div>
                    <div class="text-3">Et je suis <span class="typing">Développeur web et mobile</span></div>
                    <a class="lien" href="profil">Voir mon profil</a>
                </div>
            </transition>
        </div>
    </section>

    <!-- about section start -->
    <section class="about main-top" id="about">
        <div class="max-width">
            <h2 class="title title-home" id="bts-sio">BTS SIO</h2>
            <div class="about-content">
                <div class="column left">
                    <img src="~/assets/images/bts.png" alt="bts sio">
                </div>
                <div class="column right">
                    <div class="text">Qu'est-ce que le BTS SIO ?</div>
                    <p>Le Brevet de Technicien Supérieur Services Informatiques aux Organisations (SIO) est un diplôme reconnu par l’état de
                        niveau Bac+2. Il s’adresse à ceux qui souhaitent se former en deux ans aux métiers d’administrateur réseau ou de développeur
                        pour intégrer directement le marché du travail ou continuer des études dans le domaine de l’informatique.</p>
                    <p id="cybersecurite" >Le nouveau BTS SIO forme à la <b>cybersécurité</b> dès la rentrée 2020 ! Organisé par les professionnels 
                        du secteur informatique, les changements ne sont pas anodins puisqu’ils sont désormais organisés en bloc de compétences, afin 
                        de mieux répondre aux besoins des entreprises.</p>
                    <p>La cybersécurité est désormais essentielle dans la stratégie d’une entreprise et elle vise tous les secteurs d’activités 
                        qu’ils soient industriels ou encore financiers.</p>
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
    </div>
    
    <!-- Pied de page -->
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  layout: 'model',
  // transition: 'page',
  name: 'Index',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
/* .fade-enter{
  transform: translateY(500px);
}
.fade-enter-active {
  transition: transform 1s cubic-bezier(1.0, 0.5, 0.8, 1.0), color .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-leave-active {
  transition: opacity .2s;
}
.fade-leave-to{
  opacity: 0;
} */
</style>
