export default function Profile() {
  return (
    <>
      <div class="mx-6">
        <h1 class="my-6 text-3xl">Profile</h1>
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="hidden bg-slate-500 md:block">
            <img
              class="h-auto bg-cover bg-center bg-no-repeat"
              src="https://source.unsplash.com/random"
            />
          </div>
          <div class="mt-10">
            <div class="flex justify-center">
              <img
                class="h-52 rounded-full mb-4"
                src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
              />
            </div>
            <div class="animate-fade-in-down mb-1 text-center text-lg text-sky-600">
              Your Name
            </div>
            <div class="animate-fade-in-down mb-8 text-center text-lg text-sky-800">
              Webdeveloper
            </div>
            <blockquote>
              <p class="animate-fade-in-down mx-12 mb-9 text-center text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
                Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                sapiente officiis modi at sunt excepturi expedita sint?
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
}
