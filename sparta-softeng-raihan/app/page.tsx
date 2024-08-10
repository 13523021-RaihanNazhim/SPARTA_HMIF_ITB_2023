import Image from "next/image";

const Home =()=> {
  return (
  <main className="flex flex-col items-center bg-stone-50 min-h-screen">
    <div className="mt-10 mb-5">    
      <Image
        src="/fotopp.jpg"
        alt="Profile Picture"
        width="150"
        height="225"
        className="rounded-lg border-4 border-gray-500 shadow-lg"
      />
      </div>
    <p className="text-black text-3xl" style={{ fontFamily: 'Garamond, serif' }}> 
      Muhammad Raihan Nazhim Oktana </p>
    <p className="text-black text-3xl" style={{ fontFamily: 'Garamond, serif' }}> 
      Teknik Informatika (IF-G) </p>
    <p className="text-black text-3xl" style={{ fontFamily: 'Garamond, serif' }}> 
      19623215 / 13523021 </p>
    <p className="text-black text-2xl mt-5" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}> 
      Tentang Diri </p>
    <p className="text-black text-xl text-center ml-45 mr-45 mb-5" style={{ fontFamily: 'Times New Roman, Times, serif' }}> 
      Seorang mahasiswa semester 3 di Teknik Informatika ITB yang sedang belajar terkait software engineering. 
      <br/> Memiliki IPK 3.97/4.00 selama masa kuliah dan IQ 133. Ingin menjadi seorang software engineer yang handal.</p>
    <p className="text-black text-2xl text-center" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}> 
      Minat & Bakat </p>
    <p className="text-black text-xl text-center ml-45 mr-45 mb-5" style={{ fontFamily: 'Times New Roman, Times, serif' }}> 
      Memiliki minat dalam programming untuk explore di bidang software engineering serta competitive programming.
      <br/> Memiliki bakat pada logika dan matematika. </p>
    <p className="text-black text-2xl text-center" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}> 
      Proyek-Proyek Sebelumnya </p>
    <p className="text-black text-xl text-center ml-45 mr-45 mb-5" style={{ fontFamily: 'Times New Roman, Times, serif' }}> 
      Membuat aplikasi Gojek sederhana yang dapat digunakan sebagaimana Gojek sesungguhnya tetapi hanya pada CLI.
      <br/> Membuat aplikasi Game Pokemon sederhana yang terdiri atas beragam fitur :
      <br/> 1. Account
      <br/> 2. Menu & Help
      <br/> 3. Inventory
      <br/> 4. Battle & Arena
      <br/> 5. Shop & Laboratory
      <br/> 6. Game Management
      <br/> 7. Data Load & Save </p>
    <p className="text-black text-2xl text-center" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}> 
      Pencapaian Sebelumnya </p>
    <p className="text-black text-xl text-center ml-45 mr-45 mb-5" style={{ fontFamily: 'Times New Roman, Times, serif' }}> 
      Seseorang yang baru terjun di dunia Informatika
      <br/> Sedang mencari beragam pengalaman & pencapaian di masa kuliah mendatang :) </p>
    <p className="text-black text-2xl text-center" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}> 
      Kontak </p>
    <p className="text-black text-xl text-left ml-45 mr-45 mb-10" style={{ fontFamily: 'Times New Roman, Times, serif' }}> 
      Email : m.raihannazhimoktana@gmail.com
      <br/> LinkedIn : Muhammad Raihan Nazhim Oktana
      <br/> Line : mraihannazhimoktana
      <br/> IG : m.raihan_nazhim_o
      <br/> WA : 081336702067 </p>
  </main> 
  );
}

export default Home;