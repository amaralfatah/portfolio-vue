<script>
export default {
  data() {
    return {
      activeTab: 1,
      items: [
        {
          id: 1,
          name: 'FreshCheck App',
          imageUrl: 'freshcheck-app',
          status: 'Cegah pembelian buah dan sayuran yang tidak segar! FreshCheck App menggunakan AI untuk menilai kesegaran bahan makanan Anda secara instan.',
          tech: 'Kotlin, XML',
          github: 'aasss',
          demo: 'ss'
        },
        {
          id: 2,
          name: 'DexShop App',
          imageUrl: 'dexshop-app',
          status: 'DexShop App membantu mengelola inventaris toko pakaian Anda dengan mudah. Aplikasi ini mengoptimalkan stok, memberikan pengingat pesanan, dan meningkatkan penjualan dengan solusi yang inovatif.',
          tech: 'Kotlin, XML',
          github: 'null',
          demo: 'null'
        },
        {
          id: 3,
          name: 'Presensi Seven Inc',
          imageUrl: 'presensi-seven-inc',
          status: 'Website ini membantu mengelola karyawan di Seven Inc. Dengan fitur presensi, penggajian, dan manajemen karyawan, Seven Inc dapat mengelola karyawan dengan lebih efisien.',
          tech: 'Laravel, Bootstrap',
          github: 'null',
          demo: 'null'
        },
        {
          id: 4,
          name: 'Trebez App',
          imageUrl: 'trebez-app',
          status: 'Trebez App adalah aplikasi edukasi keselamatan berkendara yang membantu Anda menjadi pengemudi yang lebih bertanggung jawab dan terampil.',
          tech: 'Kotlin, XML',
          github: 'null',
          demo: 'null'
        },
        {
          id: 5,
          name: 'Sistem Inklusi Aisyiyah',
          imageUrl: 'inklusi-aisyiyah',
          status: 'Sistem Inklusi Aisyiyah adalah situs web yang digunakan untuk melaporkan data inklusi di Aisyiyah seluruh Indonesia.',
          tech: 'Codeigniter 3, Bootstrap',
          github: 'null',
          demo: 'null'
        },
        {
          id: 6,
          name: 'Helpdesk BSI',
          imageUrl: 'helpdesk-bsi',
          status: 'Helpdesk BSI adalah situs web yang digunakan untuk mencatat keluhan dan permintaan bantuan dari mahasiswa.',
          tech: 'Codeigniter 3, Bootstrap',
          github: 'null',
          demo: 'null'
        },
        {
          id: 7,
          name: 'Sistem Karyawan',
          imageUrl: 'sistem-karyawan',
          status: 'Sistem Karyawan adalah situs web yang memudahkan pengelolaan karyawan, mulai dari data karyawan, absensi, jabatan, hingga penggajian.',
          tech: 'Laravel, Bootstrap',
          github: 'null',
          demo: 'null'
        },
        {
          id: 8,
          name: 'Posyandu Melati',
          imageUrl: 'posyandu-melati',
          status: 'Posyandu Melati adalah situs web yang memindahkan proses pelaporan posyandu ke platform daring, sekaligus melakukan analisis data dan menghasilkan Kartu Menuju Sehat sebagai output.',
          tech: 'Laravel, Bootstrap',
          github: 'null',
          demo: 'null'
        }
      ]
    };
  },
  methods: {
    getImagePath(imageUrl) {
      // Jika dalam environment production, gunakan path tanpa subdirektori GitHub Pages
      return process.env.NODE_ENV === 'production'
        ? `/portfolio-vue/img/portfolio-${imageUrl}.png`
        : `/img/portfolio-${imageUrl}.png`;
    }
  }
}
</script>


<template>
  <div class="px-5 py-5 md:px-12 md:py-10 text-left text-white mx-3">
    <article data-page="about">
      <header>
        <div
          class="text-2xl font-bold text-white mb-10 fadein-bot title-section flex items-center justify-center flex-col">
          <h4>Past Project Experience</h4>
          <h4 class="text-base font-normal text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-[#48CAE4]">
            Explore the projects I've worked on so far</h4>
        </div>
      </header>
      <section>
        <div>
          <div
            class="grid grid-cols-1 gap-4 pb-32 md:grid-cols-3 md:gap-3 xl:grid-cols-3 xl:gap-3 2xl:gap-5 fade-zoom-in">
            <div v-for="item in items" :key="item.id">
              <div
                class="item-card flex flex-col items-center gap-2 rounded bg-[#1e1e1f] hover:bg-[#282828] border border-[#383838] rounded-xl text-white md:gap-3 px-5 py-5 lg:px-5 ">
                <div class="flex h-12 w-12 items-center justify-center p-0 h-full w-full lg:p-0 zoom-in">
                  <img :alt="`Gambar ${item.name}`" loading="lazy" decoding="async" data-nimg="1"
                    class="drop-shadow-xl rounded rounded-xl" :src="getImagePath(item.imageUrl)">
                </div>
                <div class="w-full flex flex-col gap-2 items-center text-sm md:text-base lg:text-lg">
                  <div class="title-text font-medium text-secondary">{{ item.name }}
                  </div>
                  <div class="w-full text-left text-[10px] text-[#c1c1c1] md:text-xs lg:text-sm">
                    {{ item.status }}</div>
                  <div class="w-full mt-4 text-normal text-sm text-left text-[#90E0EF]">
                    {{ item.tech }}
                  </div>
                  <div class="w-full flex justify-end">
                    <div class="flex cursor-pointer items-end gap-2 text-primary">
                      <a v-if="item.github !== 'null'" :href="item.github" target="_blank" rel="noreferrer"
                        title="View github repository" class="transition-all hover:text-accent">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                          stroke-linecap="round" stroke-linejoin="round" height="16" width="16"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                          </path>
                        </svg></a>
                      <a v-if="item.demo !== 'null'" :href="item.demo" target="_blank" rel="noreferrer"
                        title="View finished project" class="transition-all hover:text-accent">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                          stroke-linecap="round" stroke-linejoin="round" height="18" width="18"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<style>
.item-card:hover {
  transition: transform 0.3s ease;
  transform: translateY(-8px);
}

svg:hover {
  stroke: #48CAE4;
}

@keyframes fadeZoomIn {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.fade-zoom-in {
  animation: fadeZoomIn 1s ease-in-out;
}
</style>
