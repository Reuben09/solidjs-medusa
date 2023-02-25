import { For, Accessor, createResource } from "solid-js";
import { useRouteData, createRouteData } from "solid-start";
 
export function routeData() {
  return createRouteData(async () => {
    const response = await fetch(`${import.meta.env.VITE_baseUrl}/store/products`);
    return await response.json();
  });
}
 
export default function Page() {
  const myProduct = useRouteData();
  const { products } = myProduct();
 
  console.log(products);
  products.forEach((product) => {
    console.log(product.title)
  })
  return (
    <>
    <div>
  <div class="py-28">
      <div class="max-w-6xl mx-auto py-4 space-y-5">
          <div class="flex">
              <div class="flex-grow text-4xl font-extrabold">Special Qualities For You</div>
          </div>
          <div class="grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3">
                {/* <For each={products()}>
                {(product) => <li>{product.id}</li>}
              </For> */}
          </div>
      </div>
  </div>
</div>
    </>
  )
}