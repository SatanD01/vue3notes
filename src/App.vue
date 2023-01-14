<template>
  <div class="wapper">
    <Header />
    <div class="wrapper-content">
      <div class="container">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/TheHeader'
import Footer from '@/components/TheFooter'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
