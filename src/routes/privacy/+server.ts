import {redirect} from "@sveltejs/kit";

export const GET = async () => {
    return redirect(308, "/side-notes-docs/privacy")
}
