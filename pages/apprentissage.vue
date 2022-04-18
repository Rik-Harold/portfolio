<template>
    <div>
        <!-- Nav barre -->
        <Header />

        <!-- home section start -->
        <section class="home" id="home">
            <div class="max-width">
                <div class="home-content special">
                    <div class="text-2">Environnement d'apprentissage Personnel</div>
                </div>
            </div>
        </section>

        <!-- services section start -->
        <section class="services" id="services">
            <!-- Bloc de vidéos de langages -->
            <div class="max-width">
                <h2 class="title apprentissage">Apprentissage des langages</h2>
                <div class="serv-content">
                    <div v-for="(lien, index) in langages" :key="index" class="card-video">
                        <div class="box">
                            <iframe :width="lien.largeur" :height="lien.hauteur" :src="lien.source" :title="lien.titre" :frameborder="lien.bordure" :allow="lien.plus" allowfullscreen></iframe>
                            <div class="text">{{ lien.name }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Petit espacement de 30 pixels -->
            <div class="espaceDark"></div>
            <!-- Bloc de vidéos de framework -->
            <div class="max-width">
                <h2 class="title apprentissage">Apprentissage de framework</h2>
                <div class="serv-content">
                    <div v-for="(lien, index) in frameworks" :key="index" class="card-video">
                        <div class="box">
                            <iframe :width="lien.largeur" :height="lien.hauteur" :src="lien.source" :title="lien.titre" :frameborder="lien.bordure" :allow="lien.plus" allowfullscreen></iframe>
                            <div class="text">{{ lien.name }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Petit espacement de 30 pixels -->
            <div class="espaceDark"></div>
            <!-- Bloc de vidéos d'outils -->
            <div class="max-width">
                <h2 class="title apprentissage">Apprentissage d'outils</h2>
                <div class="serv-content">
                    <div v-for="(lien, index) in outils" :key="index" class="card-video">
                        <div class="box">
                            <iframe :width="lien.largeur" :height="lien.hauteur" :src="lien.source" :title="lien.titre" :frameborder="lien.bordure" :allow="lien.plus" allowfullscreen></iframe>
                            <div class="text">{{ lien.name }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Pied de page -->
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
    // layout: 'model',
    components: {
        Header,
        Footer
    },
    data() {
        return {
            langages: [
                {
                    name: 'Développer en PHP',
                    largeur: 300,
                    hauteur: 168,
                    source: 'https://www.youtube.com/embed/xUT49vXBcuc?list=PLrSOXFDHBtfFuZttC17M-jNpKnzUL5Adc',
                    titre: 'YouTube video player',
                    bordure: 0,
                    plus: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                },
                {
                    name: 'Apprendre le JavaScript',
                    largeur: 300,
                    hauteur: 168,
                    source: 'https://www.youtube.com/embed/9OJLxDxyNg4',
                    titre: 'YouTube video player',
                    bordure: 0,
                    plus: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                }
            ],
            frameworks: [
                {
                    name: 'Découverte de Vue.js',
                    largeur: 300,
                    hauteur: 168,
                    source: 'https://www.youtube.com/embed/D3oivlcoEvw',
                    titre: 'YouTube video player',
                    bordure: 0,
                    plus: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                },
                {
                    name: 'Vue.js et les bases de données',
                    largeur: 300,
                    hauteur: 168,
                    source: 'https://www.youtube.com/embed/VBLGKDl8crI',
                    titre: 'YouTube video player',
                    bordure: 0,
                    plus: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                },
                {
                    name: 'Apprendre Node Js',
                    largeur: 300,
                    hauteur: 168,
                    source: 'https://www.youtube.com/embed/0PA69L88HeI',
                    titre: 'YouTube video player',
                    bordure: 0,
                    plus: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                }
            ],
            outils: [
                {
                    name: 'Apprendre Git',
                    largeur: 300,
                    hauteur: 168,
                    source: 'https://www.youtube.com/embed/225wkShIcc8',
                    titre: 'YouTube video player',
                    bordure: 0,
                    plus: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                },
                {
                    name: 'Bootstrap',
                    largeur: 300,
                    hauteur: 168,
                    source: 'https://www.youtube.com/embed/Ooz1bL1vabU?list=PLpG9MHuD988hWOb46P8qu2yEvlfK8xO9G',
                    titre: 'YouTube video player',
                    bordure: 0,
                    plus: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                },
                {
                    name: 'Utilisation du JSON',
                    largeur: 300,
                    hauteur: 168,
                    source: 'https://www.youtube.com/embed/gLcr84H2x5Q',
                    titre: 'YouTube video player',
                    bordure: 0,
                    plus: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                }
            ]
        }
    }
}
</script>

<style scoped>
.affiche-enter{
  transform: translateY(500px);
}
.affiche-enter-active {
  transition: transform 1s cubic-bezier(1.0, 0.5, 0.8, 1.0), color .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.affiche-leave-active {
  transition: opacity .2s;
}
.affiche-leave-to{
  opacity: 0;
}
</style>