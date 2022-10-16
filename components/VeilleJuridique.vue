<template>
    <div>
        <!-- services section start -->
        <section class="skills veilleDark" id="skills">
            <div class="max-width">
                <h2 class="titleVeille">Ma veille juridique</h2>
                <div class="skills-content">
                    <div class="column left">
                        <div class="text">Qu'est-ce que la veille juridique ?</div>
                        <p>La veille juridique correspond à une veille habituelle, mais cette fois-ci s’appliquant au domaine du droit. 
                            La tâche consiste à consulter l’actualité du droit à une fréquence régulière. La veille juridique permet 
                            de se tenir informé des projets de loi, pour anticiper les évolutions législatives et réglementaires à 
                            venir. </p>
                    </div>
                    <div class="column right2">
                        <div class="text">Quels sont mes outils de veille juridique ?</div>
                        <p>Afin de me tenir au courant de l'actualité dans le domaine du droit, ma veille s'effectue avec des outils 
                            tels que Feedly, disponible sur mobile sur Play Store, et Google Alerte, qui peut facilement être intégré 
                            au navigateur.
                        </p>
                    </div>
                </div>
                <div id="voirVeille">
                    <a class="viewDetails" target="_blank" href="veille_informationnelle.pdf">Outils de veille juridique</a>
                </div>
            </div>
        </section>

        <!-- skills section start -->
        <section class="skills" id="skills">
            <div class="max-width">
                <h2 class="titleVeille">Mon sujet de veille juridique</h2>
                <div class="skills-content">
                    <div class="column left">
                        <div class="text">Pourquoi ce thème ?</div>
                        <p>Afin d'orienter ma veille juridique, j'ai opté pour le thème de la <i>CNIL</i>. Ce thème de veille juridique 
                            a attiré mon attention car son rôle est déterminant dans la gestion des données personnelles qui s'avère ainsi 
                            être un élément important du domaine de l'informatique et surtout du développement. Mon secteur d'activité est 
                            donc très lié à ce thème, ce qui renforce mon choix.
                        </p>
                    </div>
                    <div class="column right2">
                        <div class="text">Qu'est-ce que la CNIL ?</div>
                        <p>La Commission Nationale de l'Informatique et des Libertés (CNIL) a été créée par la loi Informatique et 
                            Libertés du 6 janvier 1978. Elle est chargée de veiller à la protection des données personnelles contenues 
                            dans les fichiers et traitements informatiques ou papiers, aussi bien publics que privés. Ainsi, elle est 
                            chargée de veiller à ce que l'informatique soit au service du citoyen et qu'elle ne porte atteinte ni à 
                            l'identité humaine, ni aux droits de l'homme, ni à la vie privée, ni aux libertés individuelles ou publiques.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- services section start -->
        <section class="skills veilleDark" id="skills">
            <div class="max-width">
                <h2 class="titleVeille">Quelques actualités</h2>
                <div class="skills-content">
                    <div class="column left">
                        <div class="text">Actualité 1</div>
                        <p class="actuVeille">Identité numérique : à quoi va servir l'application lancée en mai par le gouvernement ?</p>
                        <p>Une nouvelle application reposant sur l'identité numérique va permettre de confirmer son identité en ligne pour s'authentifier lors de démarches administratives.<br />
                        Le gouvernement lancera prochainement une application "France Identité" permettant de prouver son identité en ligne. L'outil sera déployé fin mai dans une version test...</p>
                        <a class="lien" href="https://www.rtl.fr/actu/sciences-tech/identite-numerique-a-quoi-va-servir-l-application-lancee-en-mai-par-le-gouvernement-7900149727" target="_blank">Lire plus</a>
                    </div>
                    <div class="column right2">
                        <div class="text">Actualité 2</div>
                        <p class="actuVeille">Cookies : la CNIL sanctionne GOOGLE à hauteur de 150 millions d’euros</p>
                        <p>Le 31 décembre 2021, la CNIL a sanctionné GOOGLE pour un montant total de 150 millions d’euros (90 millions d’euros pour GOOGLE LLC et 60 millions d’euros pour GOOGLE IRELAND LIMITED) parce quil n’est pas permis aux utilisateurs de google.fr et de youtube.com de refuser les cookies aussi facilement que de les accepter.</p>
                        <a class="lien" href="https://www.cnil.fr/fr/la-cnil-publie-un-guide-rgpd-pour-les-developpeurs" target="_blank">Lire plus</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'VeilleJuridique'
    }
</script>

<style scoped>
#voirVeille
{
    display: flex;
    justify-content: center;
    align-items: center;
}
.actuVeille
{
    color: brown;
    font-size: 1.2rem;
}
</style>