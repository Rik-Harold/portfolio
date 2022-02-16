<template>
    <div>
        <!-- home section start -->
        <section class="home" id="home">
            <div class="max-width">
                <div class="home-content special">
                    <div class="text-2">Situations professionnelles</div>
                </div>
            </div>
        </section>

        <!-- services section start -->
        <section class="services" id="services">
            <div class="max-width">
                <h2 class="title title-projets">Preuves techniques</h2>

                <!-- Barre de recherche -->
                <div class="searchBar">
                    <div class="search">
                        <input type="text" name="search" id="search" class="saisie" v-model="saisie" placeholder="Rechercher une preuve technique">
                    </div>
                </div>

                <!-- Contenu des preuves -->
                <div class="serv-content">
                    <div class="card" v-for="(preuve, index) in tri" :key="index" >
                        <div class="box">
                            <div class="text nameSituation">{{ preuve.name }}</div>
                            <!-- <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim.</p> -->
                            <p>{{ preuve.description }}</p>
                            <a class="viewDoc" href="#">Voir le document</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        // layout: 'navBarre',
        data() {
            return {
                saisie: '',
                situations: [
                    {
                        name: 'identification des ressources numériques',
                        description: 'Recencement trié des équipements informatiques d\'un réseau informatique.',
                        document: ''
                    },
                    {
                        name: 'Sauvegarde et restauration',
                        description: 'Mise en place de service de sauvegarde et de restauration opérationnelles.',
                        document: ''
                    },
                    {
                        // name: 'Gestion d\'incidents et de demandes d\'assistance et d\'évolution',
                        name: 'Assistance et gestion d\'incidents',
                        // description: 'Traitement des requêtes des clients et proposition des solutions adaptées à leurs besoins.',
                        description: 'Mise en place d\'un système de tiketing pour répondre aux besoins des clients.',
                        document: ''
                    },
                    {
                        name: 'Valorisation de l\'image de l\'organisation',
                        description: 'Site web de l\'entreprise WEBMANA présentant son identité numérique.',
                        document: ''
                    },
                    {
                        name: 'Travail en mode projet',
                        description: 'Utilisation de l\'outil GANTT PROJECT pour la répartition des tâches, le suivi et l\'analyse du projet',
                        document: ''
                    },
                    {
                        name: 'Tests d\'intégration',
                        description: 'Tests pour évaluer la performance des applications développées et leur acceptation.',
                        document: ''
                    },
                    {
                        name: 'Déployement de services',
                        description: 'Mise en ligne des services en utilisant des outils comme GIT pour rendre disponible les projets en ligne.',
                        document: ''
                    },
                    {
                        name: 'Accompagnement des utilisateurs',
                        description: 'Formation des utilisateurs à l\'usage d\'un site suivant les différentes étapes de navigation.',
                        document: ''
                    },
                    {
                        name: 'Environnement d\'apprentissage personnel',
                        description: 'Tutos d\'explication de concepts de programmation.',
                        document: ''
                    },
                    {
                        name: 'Outils et stratégies de veille informationnelle',
                        description: 'Maintenir une veille sur les différentes évolution du big data et de la blockchain.',
                        document: ''
                    },
                    {
                        name: 'Gestion d\'identitié professionnelle',
                        description: 'Profil professionnel en ligne mettant en avant mon Curriculum Vitae et mes compétences professionnelles.',
                        document: ''
                    },
                    {
                        name: 'Développement du projet professionnel',
                        description: 'Perspectives d\'évolution après le BTS notamment dans les formations de Data Scientist',
                        document: ''
                    }
                ]
            }
        },
        computed: {
            tri ()
            {
                if (this.saisie === '')
                {
                    return this.situations
                }else
                {
                    const situations = this.situations.filter(preuve => {
                        return preuve.name.toLowerCase().includes(this.saisie.toLowerCase())
                    })
                    return situations
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>