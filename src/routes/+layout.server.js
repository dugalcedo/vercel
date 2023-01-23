import { error } from "@sveltejs/kit";

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ params }) {
    let secret = 'im a secret'
    secret = secret
    return {
        a: 'layout.srver'
    };
}
