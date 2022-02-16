<template>
    <div>
        <!-- ENTETE du site -->
        <div class="scroll-up-btn">
            <i class="fas fa-angle-up"></i>
        </div>
        <nav class="navbarre">
            <div class="max-width">
                <div class="logo"><nuxt-link to="index">Portfo<span>lio.</span></nuxt-link></div>
                <ul class="menu">
                    <li><nuxt-link to="/" class="menu-btn">Accueil</nuxt-link></li>
                    <li><nuxt-link to="profil" class="menu-btn">Profil</nuxt-link></li>
                    <li><nuxt-link to="documentation" class="menu-btn">Documentation</nuxt-link></li>
                    <li><nuxt-link to="preuves" class="menu-btn">Situations professionnelles</nuxt-link></li>
                    <li><nuxt-link to="veilles" class="menu-btn">Veilles</nuxt-link></li>
                </ul>
                <div class="menu-btn">
                    <i class="fas fa-bars"></i>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>