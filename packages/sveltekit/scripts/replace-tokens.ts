import { fileURLToPath } from 'node:url'
import { replaceReadmeTokens } from '@passlock/shared/scripts/replace-readme-tokens.js'
import { replaceCodeTokens } from '@passlock/shared/scripts/replace-code-tokens.js'

// see https://stackoverflow.com/a/60309682
if (process.argv[1] === fileURLToPath(import.meta.url)) {
	await replaceReadmeTokens(import.meta.url)
	console.log()
	await replaceCodeTokens(import.meta.url, { skipBuild: true })
}