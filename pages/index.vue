<template>
  <!-- <Tutorial/> -->
  <div  id="index">
    <!-- Nav barre -->
    <Entete />

    <section class="home" id="home">
        <div class="max-width">
            <transition name="entete">
                <div class="home-content">
                    <div class="text-1">Bonjour, je m'appelle</div>
                    <div class="text-2">Cédrik Doddé</div>
                    <div class="text-3">Et je suis <span class="typing"></span></div>
                    <a class="cv" href="CV_Cedrik_DODDE_Dev_Designer.pdf" target="_blank">CV</a>
                    <a class="lien" href="realisations">Réalisations</a>
                </div>
            </transition>
        </div>
    </section>

    <!-- about section start -->
    <section class="about" id="about">
            <div class="max-width">
                <h2 class="title" id="moi">A propos de moi</h2>
                <div class="about-content">
                    <div class="column left">
                        <img src="~/assets/images/profil.webp" alt="moi">
                    </div>
                    <div class="column right">
                        <div class="text">Je suis Cédrik DODDE</div>
                        <p>J'ai 22ans et je suis développeur web et UI/UX Designer. Ma passion pour l'informatique m'a poussé à obtenir un BTS SIO en Solution logiciel et applications métiers avant de compléter ma formation d'un Titre RNCP (Bac +2) en Infographie et Design Web à <i>DORANCO</i>. Je me sers ainsi de mes compétences mixtes danc ces deux domaines pour créer, protoyper et développer des interfaces web, des projets print et de l'animation 2D et 3D.</p>
                        <div class="text">Mes perspectives d'avenir</div>
                        <p>Polyvalent dans mes compétences, je suis disponible à travailler sur plusieurs projets en tant que Freelance. Toutefois, une bonne opportunité en entreprise est également une perspective que j'aimerai explorer.</p>
                        <a class="lien" href="CV_Cedrik_DODDE_Dev_Designer.pdf" target="_blank">Télécharger mon CV</a>
                    </div>
                </div>
            </div>
        </section>

    <!-- contact section start -->
    <!-- services section start -->
    <section class="services" id="services">
            <div class="max-width">
                <h2 class="title" id="formations" >Mes formations</h2>
                <div class="serv-content">
                    <div class="card">
                        <div class="box">
                            <i class="fas fa-chart-line"></i>
                            <div class="text">Baccalauréat</div>
                            <p>J'ai orienté mes études secondaires du second cycle en sciences et maths pour obtenir un Baccalauréat scientifique.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="box">
                            <i class="fas fa-code"></i>
                            <div class="text">BTS</div>
                            <p>Diplômé d'un baccalauréat scientifique, je me suis spécialisé en informatique à travers un cursus de BTS SIO.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="box">
                            <i class="fas fa-paint-brush"></i>
                            <div class="text">Infographie</div>
                            <p>Une spécialisation en infographie m'a permis d'améliorer mes compétences en développement d'interfaces.</p>
                        </div>
                    </div>
                </div>
            </div>
    </section>

    <!-- contact section start -->
    <section class="contact">
            <div class="max-width">
                <h2 class="title" id="contactez-moi">Contactez-moi</h2>
                <div class="contact-content">
                    <div class="column left">
                        <div class="text">Réseaux sociaux professionnels</div>
                        <p>Je suis également actif sur les réseaux sociaux comme <a href="https://github.com/Rik-Harold" target="_blank" rel="noopener noreferrer">GitHub</a> 
                        et <a href="https://www.linkedin.com/in/cédrik-dodde-b0178a19a" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
                        <div class="icons">
                            <div class="row">
                                <i class="fas fa-user"></i>
                                <div class="info">
                                    <div class="head">Nom et Prénom</div>
                                    <div class="sub-title">DODDE Cédrik</div>
                                </div>
                            </div>
                            <div class="row">
                                <i class="fas fa-map-marker-alt"></i>
                                <div class="info">
                                    <div class="head">Addresse</div>
                                    <div class="sub-title">10 Avenue Marc sangnier, Viry-Châtillon</div>
                                </div>
                            </div>
                            <div class="row">
                                <i class="fas fa-envelope"></i>
                                <div class="info">
                                    <div class="head">Email</div>
                                    <div class="sub-title">cdrikdodde@yahoo.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column right" id="contact">
                        <div class="text">Ecrivez-moi</div>
                        <form action="#">
                            <div class="fields">
                                <div class="field name">
                                    <input type="text" v-model="identite" placeholder="Nom et Prénom" required>
                                </div>
                                <!-- <div class="field email">
                                    <input type="email" v-model="expediteur" placeholder="Email" required>
                                </div> -->
                            </div>
                            <div class="field">
                                <input type="text" v-model="sujet" placeholder="Sujet" required>
                            </div>
                            <div class="field textarea">
                                <textarea cols="30" rows="10" v-model="message" placeholder="Message.." required></textarea>
                            </div>
                            <!-- Zone du bouton d'envoi de mail -->
                            <div class="button-area">
                                <!-- Envoi du mail -->
                                <Mailto :mail="destinataire" :subject="sujet" :body="message + '\n\n' + identite" title="Envoyer">
                                    <button type="button" @click="send(instance)" id="mailButton">
                                        Envoyer
                                    </button>
                                </Mailto>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </section>
    
    <!-- Pied de page -->
    <Footer />
  </div>
</template>

<script>
// Importation des dépendances
import Typed from 'typed.js'
// import Header from '../components/Header.vue'
import Entete from '../components/Entete.vue'
import Footer from '../components/Footer.vue'

export default {
  layout: 'model',
  // transition: 'page',
  name: 'Index',
  components: {
    Entete,
    Footer
  },
  data () {
    return {
      animeBienvenu: null,
      identite: '',
      destinataire: 'cdrikdodde@yahoo.com',
      sujet: '',
      message: '',
      instance: null
    }
  },
  mounted () {
    // Initialisation de l'instance de vue
    this.instance = this
    // Création de l'animation
    const typed1 = new Typed('.typing', {
      strings: ['UI/UX Designer', 'Développeur web', 'Développeur mobile'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      fadeOut: true,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 500
    })
    // Affectation de l'animation de bienvenu
    this.animeBienvenu = typed1
  },
  methods: {
    send: (instance) => {
      // Notification de mail envoyé
      alert('Vous serez redirigé vers votre boite mail pour confirmer l\'envoi du mail !')
      // Initialisation
      setTimeout(() => {
        instance.identite = ''
        instance.sujet = ''
        instance.message = ''
      }, 1500)
    }
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
