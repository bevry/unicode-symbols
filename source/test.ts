import { equal } from 'assert-helpers'
import kava from 'kava'

import { tick } from './index.js'

kava.suite('@bevry/unicode-symbols', function (suite, test) {
	test('tick', function () {
		equal(tick, '✔')
	})
})
