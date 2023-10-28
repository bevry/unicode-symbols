import { equal, deepEqual } from 'assert-helpers'
import kava from 'kava'

import figures, {
	isUnicodeSupported,
	replaceSymbols,
	mainSymbols,
	fallbackSymbols,
} from './index.js'

kava.suite('@bevry/figures', function (suite, test) {
	const result = (mainSymbols: any, fallbackSymbols: any) =>
		isUnicodeSupported() ? mainSymbols : fallbackSymbols

	console.log(`  ${Object.values(figures).join('  ')}\n`)

	test('figures', function () {
		equal(figures.tick, result('✔', '√'))
	})

	test('mainSymbols', function () {
		equal(mainSymbols.tick, '✔')
	})

	test('fallbackSymbols', function () {
		equal(fallbackSymbols.tick, '√')
	})

	test('replaceSymbols() keep non-figures as is', function () {
		equal(replaceSymbols('foo'), 'foo')
	})

	test('replaceSymbols() replace figures', function () {
		equal(replaceSymbols('✔ ✔ ✔'), result('✔ ✔ ✔', '√ √ √'))
		equal(replaceSymbols('✔ ✘\n★ ◼'), result('✔ ✘\n★ ◼', '√ ×\n✶ ■'))
		equal(replaceSymbols('✔ ✘ ★ ◼'), result('✔ ✘ ★ ◼', '√ × ✶ ■'))
	})

	test('figures are non-empty strings', function () {
		for (const figure of Object.values(figures)) {
			equal(typeof figure === 'string' && figure.trim() !== '', true)
		}
	})
})
