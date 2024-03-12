// keystatic.config.ts
import { config, fields, collection, singleton, component } from "@keystatic/core";
import { wrapper, block } from "@keystatic/core/content-components";

export default config({
	storage: {
		kind: "local",
	},
	collections: {
		pages: collection({
			label: "Pagine",
			slugField: "title",
			path: "src/content/pages/*",
			entryLayout: "content",
			format: { contentField: "content" },
			schema: {
				title: fields.slug({
					name: {
						label: "Titolo",
						description: "Titolo della pagina",
						validation: {
							isRequired: true,
						},
					},
					// Optional slug label overrides
					slug: {
						label: "SEO-friendly slug",
						description: "Slug da usare per la pagina, attenzione, è consigliato non modificarlo dopo la pubblicazione.",
					},
				}),
				content: fields.markdoc({
					label: "Content",
					options: {
						heading: [2, 3, 4, 5, 6],
					},
					components: {
						ContactWithForm: block({
							label: "Contact form",
							schema: {
								timetables: fields.array(fields.text({ label: "Time" }), {
									label: "Time",
									itemLabel: (props) => props.value,
								}),
							},
						}),
					},
				}),
			},
		}),
	},
});
