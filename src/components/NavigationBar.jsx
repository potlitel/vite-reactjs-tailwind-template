export default function NavigationBar() {
  return (
    <>
      <nav class="flex items-center justify-between px-10 bg-white py-6 border-b">
        <div class="flex items-center bg-gray-100 px-4 py-2 rounded-md space-x-3 w-96">
          <input
            type="text"
            placeholder="search"
            class="bg-gray-100 outline-none w-full"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 cursor-pointer text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div class="flex items-center space-x-4">
          <img
            class="w-8 rounded-full"
            src="https://imagez.tmz.com/image/f7/1by1/2021/12/14/f7703994b69d48ca802df55729a2325c_xl.jpg"
            alt="Elon Musk"
          />
          <p class="hidden md:block">Elon Musk</p>
        </div>
      </nav>
    </>
  );
}
