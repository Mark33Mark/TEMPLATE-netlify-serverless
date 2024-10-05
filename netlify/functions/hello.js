export default async (req, context) => {

	console.log("context = ", context.cookies)
	if (context.cookies.get("chocolate")) {
		return new Response("Sorry, no more cookies for you");
	}

	context.cookies.set("chocolate", "yummy");

	return new Response("Here's a chocolate cookie! 🍪");
};

export const config = {
	path: "/hello",
};
