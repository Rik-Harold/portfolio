<template>
    <article>
        <!-- Nav barre -->
        <Header />
        
        <!-- home section start -->
        <section class="home" id="home">
            <div class="max-width">
                <div class="home-content special">
                    <div class="text-2">Mon profil</div>
                </div>
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
                        <p>Etudiant en fin de cursus du BTS SIO, j'ai 21ans et je suis développeur web et mobile. Ma passion pour l'informatique m'a poussé à orienter mes études vers ce secteur et j'ai rapidement pris goût à la programmation. Au cours de mes deux années d'études au <i>CFA ITIS</i>, je me suis formé à l'usage des langages de programation et à de la maitrise de systèmes informatiques.</p>
                        <div class="text">Mes perspectives d'avenir</div>
                        <p>L'expérience du monde du numérique a poussé plus haut ma passion pour cet univers. En ce sens, mon BTS me servira de tremplin à une spécialisation en big data et machin-learning. En effet, la gestion et l'automatisation des données avec l'usage de l'intelligence artificielle sont devenues mes repères. Je pense ainsi intégrer un cycle d'ingénieur pour devenir <strong>Data Engineer</strong>.</p>
                        <a class="lien" href="CV_Cédrik_DODDE_Dev.pdf" target="_blank">Télécharger mon CV</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- services section start -->
        <section class="services" id="services">
            <div class="max-width">
                <h2 class="title" id="formations" >Mes formations</h2>
                <div class="serv-content">
                    <div class="card">
                        <div class="box">
                            <i class="fas fa-paint-brush"></i>
                            <div class="text">BEPC</div>
                            <p>J'ai obtenu mon Brevet d'Etudes du Premier Cycle en option maths et sciences.</p>
                        </div>
                    </div>
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
                            <p>Diplômé d'u baccalauréat scientifique, je me spécialise en informatique à travers le cursus du BTS SIO.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- skills section start -->
        <section class="skills" id="skills">
            <div class="max-width">
                <h2 class="title" id="competences" >Mes compétences</h2>
                <div class="skills-content">
                    <div class="column left">
                        <div class="text">Mes compétences et expériences</div>
                        <p>Au nombre des outils de programmation que je maîtrise, j'ai su développer des compétences de gestion de base de données, de création de sites et d'applications web, de déployement de services en ligne, de maintenance de systèmes d'exploitations (Windows et Linux), me permettant ainsi de répondre aisément aux besoins de potentiels clients dans ma plage de compétences. L'utilisation de l'outil GIt et de logiciels de modélisation conceptionnelles de données (MCD) sont également des compétences que j'ai acquises.</p>
                        <nuxt-link to="preuves">Voir plus</nuxt-link>
                    </div>
                    <div class="column right">
                        <div class="bars">
                            <div class="info">
                                <span>HTML</span>
                                <span>90%</span>
                            </div>
                            <div class="line html"></div>
                        </div>
                        <div class="bars">
                            <div class="info">
                                <span>CSS</span>
                                <span>70%</span>
                            </div>
                            <div class="line css"></div>
                        </div>
                        <div class="bars">
                            <div class="info">
                                <span>JavaScript</span>
                                <span>75%</span>
                            </div>
                            <div class="line js"></div>
                        </div>
                        <div class="bars">
                            <div class="info">
                                <span>C#</span>
                                <span>70%</span>
                            </div>
                            <div class="line c-sharp"></div>
                        </div>
                        <div class="bars">
                            <div class="info">
                                <span>Vue Js</span>
                                <span>70%</span>
                            </div>
                            <div class="line vue-js"></div>
                        </div>
                        <div class="bars">
                            <div class="info">
                                <span>Nuxt Js</span>
                                <span>70%</span>
                            </div>
                            <div class="line nuxt-js"></div>
                        </div>
                        <div class="bars">
                            <div class="info">
                                <span>Node Js</span>
                                <span>75%</span>
                            </div>
                            <div class="line node-js"></div>
                        </div>
                        <div class="bars">
                            <div class="info">
                                <span>PHP</span>
                                <span>80%</span>
                            </div>
                            <div class="line php"></div>
                        </div>
                        <div class="bars">
                            <div class="info">
                                <span>MySQL</span>
                                <span>80%</span>
                            </div>
                            <div class="line mysql"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- teams section start -->
        <section class="services">
            <div class="max-width">
                <h2 class="title" id="projets" >Mes projets personnels</h2>
                <div class="serv-content">
                    <div v-for="(projet, index) in projets" :key="index" class="card">
                        <div class="box">
                            <div class="text">{{ projet.name }}</div>
                            <p>Ceci est un projet</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- contact section start -->
        <section class="contact" id="contact">
            <div class="max-width">
                <h2 class="title" id="contactez-moi">Contactez-moi</h2>
                <div class="contact-content">
                    <div class="column left">
                        <div class="text">Réseaux sociaux professionnels</div>
                        <p>Je suis également actif sur les réseaux sociaux comme <a href="https://github.com/Rik-Harold" target="_blank" rel="noopener noreferrer">GitHub</a> 
                        et <a href="www.linkedin.com/in/cédrik-dodde-b0178a19a" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
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
                                    <div class="sub-title">jharold613@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column right">
                        <div class="text">Ecrivez-moi</div>
                        <form action="#">
                            <div class="fields">
                                <div class="field name">
                                    <input type="text" v-model="identite" placeholder="Nom et Prénom" required>
                                </div>
                                <div class="field email">
                                    <input type="email" v-model="expediteur" placeholder="Email" required>
                                </div>
                            </div>
                            <div class="field">
                                <input type="text" v-model="sujet" placeholder="Sujet" required>
                            </div>
                            <div class="field textarea">
                                <textarea cols="30" rows="10" v-model="message" placeholder="Message.." required></textarea>
                            </div>
                            <div class="button-area">
                                <button>Envoyer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <!-- <img src="~/assets/images/bts-sio.png" alt="Blocs de compétences BTS SIO"> -->
        
        <!-- Pied de page -->
        <Footer />
    </article>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
// import nodemailer from 'nodemailer'

export default {
    layout: 'model',
    components: {
        Header,
        Footer
    },
    data() {
        return {
            identite: '',
            expediteur: '',
            sujet: '',
            message: '',
            projets: [
                {
                    name: 'Premier projet',
                    image: '~/assets/images/projet-bot-whatsapp.png'
                },
                {
                    name: 'Second projet',
                    image: '~/assets/images/projet-bot-whatsapp.png'
                },
                {
                    name: 'Dernier projet',
                    image: '~/assets/images/projet-bot-whatsapp.png'
                }
            ],
            transporter: null
        }
    },
    mounted() {
        // Initialisation du transporteur de mail
        // this.transporter = nodemailer.createTransport({
        //     service: 'yahoo',
        //     auth: {
        //         user: 'cdrikdodde@yahoo.com',
        //         pass: 'Amaterazu3'
        //     }
        // })
    },
    methods: {
        send: (instance) => {
            // Vérification
            // if (instance != null)
            // {
            //     window.open('mailto:' + instance.expediteur + '?subject=' + instance.sujet + '&body=' + instance.message + '\n\n' + instance.identite + '')
            //     // Envoi du mail
            //     // instance.$mail.send({
            //     //     from: instance.expediteur,
            //     //     subject: instance.sujet,
            //     //     text: instance.message + '\n\n' + instance.identite,
            //     // })
            //     // Notification de réception
            //     alert('Votre message a bien été envoyé !')
            // }
            let mailOptions = {
                from: instance.expediteur,
                to: 'jharold613@gmail.com',
                subject: instance.sujet,
                text: instance.message
            }

            instance.transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error)
                } else {
                    console.log('Email sent: ' + info.response)
                }
            })
        }
    }

}
</script>

<style>
</style>