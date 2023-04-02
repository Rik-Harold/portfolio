<template>
    <div>
        <!-- Nav barre -->
        <Entete />

        <!-- home section start -->
        <transition name="apparition">
            <section class="home" id="home">
                <div class="max-width">
                    <div class="home-content special">
                        <div class="text-2">Mes Réalisations</div>
                    </div>
                </div>
            </section>
        </transition>

        <!-- services section start -->
        <section class="services" id="services">
            <div class="max-width">
                <h2 class="title title-projets">Réalisations</h2>

                <!-- Barre de recherche -->
                <div class="searchBar">
                    <div class="search">
                        <input type="text" name="search" id="search" class="saisie" v-model="saisie" placeholder="Rechercher une preuve technique">
                    </div>
                </div>

                <!-- Contenu des preuves -->
                <div class="serv-content">
                    <div class="card h-100" v-for="(realisation, index) in tri" :key="index" >
                        <div class="box">
                            <div class="text">{{ realisation.name }}</div>
                            <!-- <p>{{ realisation.description }}</p> -->
                            <div class="details">
                                <img :src="realisation.image" :alt="realisation.name">
                            </div>
                            <!-- <button v-if="realisation.isImage" class="viewDoc" @click="ouvreImage(instance, realisation.source)">Affiche</button>
                            <button v-else-if="realisation.isVideo" class="viewDoc" @click="ouvreVideo(instance, realisation.source)">Affiche</button>
                            <a v-else class="viewDoc" :href="realisation.source" target="_blank">Voir plus</a> -->
                            <a class="viewDoc" :href="realisation.source" target="_blank">Détails</a>
                        </div>
                    </div>
                </div>

                <!-- Affichage plein écran de l'image' -->
                <!-- <div v-show="afficheImage" @click="fermeImage(instance)" class="affiche-image">
                    <img :src="sourceImage" alt="">
                </div> -->

                <!-- Affichage plein écran de la vidéo -->
                <!-- <div v-show="afficheVideo" @click="fermeVideo(instance)" class="affiche-video">
                    <video :src="sourceVideo" height="300" controls>
                        Vidéo indisponible
                    </video>
                </div> -->
            </div>
        </section>

        <!-- Pied de page -->
        <Footer />
    </div>
</template>

<script>
import Entete from '../components/Entete.vue'
import Footer from '../components/Footer.vue'

export default {
    // layout: 'model',
    components: {
        Entete,
        Footer
    },
    data() {
        return {
            instance: null,
            afficheImage: false,
            sourceImage: '',
            afficheVideo: false,
            sourceVideo: '',
            saisie: '',
            realisations: [
                {
                    name: 'Carte restaurant',
                    image: '/realisations/carte-restaurant-1.png',
                    isVideo: false,
                    isImage: false,
                    source: '/documents/carte-restaurant.pdf'
                },
                {
                    name: 'Page habillée',
                    image: '/realisations/couverture.png',
                    isVideo: false,
                    isImage: false,
                    source: '/documents/couverture-habillage.pdf'
                },
                {
                    name: 'Couverture livre',
                    image: '/realisations/couverture-livre.png',
                    isVideo: false,
                    isImage: false,
                    source: '/documents/couverture-livre.pdf'
                },
                {
                    name: 'Horoscope',
                    image: '/realisations/horoscope.png',
                    isVideo: false,
                    isImage: false,
                    source: '/documents/horoscope.pdf'
                },
                {
                    name: 'Logo studio',
                    image: '/realisations/logo-studio.png',
                    isVideo: false,
                    isImage: false,
                    source: '/documents/logo-studio.pdf'
                },
                {
                    name: 'Logo Zen Me',
                    image: '/realisations/logo-zen-me.png',
                    isVideo: false,
                    isImage: false,
                    source: '/documents/logo-zen-me.pdf'
                },
                {
                    name: 'Recette de plat',
                    image: '/realisations/recette.png',
                    isVideo: false,
                    isImage: false,
                    source: '/documents/recette.pdf'
                },
                {
                    name: 'Texte 3D',
                    image: '/realisations/cyberpunk-3d.png',
                    isVideo: false,
                    isImage: true,
                    source: '/realisations/cyberpunk-3d.png'
                },
                {
                    name: 'Dauphin',
                    image: '/realisations/dauphin.png',
                    isVideo: false,
                    isImage: true,
                    source: '/realisations/dauphin.png'
                },
                {
                    name: 'Glassmorphisme',
                    image: '/realisations/glassmorphisme.png',
                    isVideo: false,
                    isImage: true,
                    source: '/realisations/glassmorphisme.png'
                },
                {
                    name: 'Illustration festival',
                    image: '/realisations/festival.png',
                    isVideo: false,
                    isImage: true,
                    source: '/realisations/festival.png'
                },
                {
                    name: 'Maison 3D',
                    image: '/realisations/maison-3D.png',
                    isVideo: false,
                    isImage: true,
                    source: '/realisations/maison-3D.png'
                },
                {
                    name: 'Illustration jeu',
                    image: '/realisations/tape-taupe.png',
                    isVideo: false,
                    isImage: true,
                    source: '/realisations/tape-taupe.png'
                },
                {
                    name: 'Pixel Art Naruto',
                    image: '/realisations/pixel-art.png',
                    isVideo: false,
                    isImage: true,
                    source: '/realisations/pixel-art.png'
                },
                {
                    name: 'Jeu Packman',
                    image: '/realisations/packman-illustration.png',
                    isVideo: false,
                    isImage: true,
                    source: '/realisations/packman-illustration.png'
                },
                {
                    name: 'Ville',
                    image: '/realisations/ville-illustration.png',
                    isVideo: false,
                    isImage: true,
                    source: '/realisations/ville-illustration.png'
                },
                {
                    name: 'Pub Air France',
                    image: '/realisations/pub-air-france.png',
                    isVideo: true,
                    isImage: false,
                    source: '/videos/realisations/air-france-pub.mp4'
                },
                {
                    name: 'Opening Naruto',
                    image: '/realisations/opening-naruto.png',
                    isVideo: true,
                    isImage: false,
                    source: '/videos/realisations/opening-naruto.mp4'
                },
                {
                    name: 'App Streaming',
                    image: '/realisations/app-streaming.png',
                    isVideo: false,
                    isImage: true,
                    source: '/realisations/app-streaming.png'
                },
                {
                    name: 'App Messagerie',
                    image: '/realisations/app-messagerie.png',
                    isVideo: false,
                    isImage: true,
                    source: '/realisations/app-messagerie.png'
                },
            ]
        }
    },
    computed: {
        // Fonction de recherche de preuves techniques
        tri ()
        {
            if (this.saisie === '')
            {
                return this.realisations
            }else
            {
                const realisations = this.realisations.filter(realisation => {
                    return realisation.name.toLowerCase().includes(this.saisie.toLowerCase())
                })
                return realisations
            }
        }
    },
    mounted () {
        this.instance = this
    }
    /* methods: {
        ouvreImage: (instance, data) => {
            instance.afficheImage = true
            instance.sourceImage = data
        },
        fermeImage: (instance) => {
            instance.afficheImage = false
            instance.sourceImage = ''
        },
        ouvreVideo: (instance, data) => {
            instance.afficheVideo = true
            instance.sourceVideo = data
        },
        fermeVideo: (instance) => {
            instance.afficheVideo = false
            instance.sourceVideo = ''
        }
    } */
}
</script>

<style scoped>
.card .details {
    height: 150px;
    background-color: #fff;
    margin: 0 auto;
    background-color: #222;
    transition: background-color 0.3s ease;
}
.card:hover .details {
    background-color: crimson;
}
.card button {
    width: 100%;
}
img {
    height: 100%;
    border-radius: 5px;
    /* width: 100%; */
}
.affiche-video, .affiche-image {
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    height: 100vh;
    padding: 20vh 0;
    position: fixed;
    cursor: pointer;
    background-color: rgba(1, 1, 1, .3);
}
.affiche-image {
    display: flex;
    justify-content: center;
}
</style>