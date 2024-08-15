/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

var tap = require('tap')
var _ = require('underscore')

var common = require('../src/common')

tap.ok(common.comparableVersion('0.10.1') > common.comparableVersion('0.9.0'), 'version compare correctly')
tap.ok(common.comparableVersion('2.0.0') > common.comparableVersion('0.0.3'), 'More significant cmponent compares correctly')
tap.ok(common.comparableVersion('0.1.0') > common.comparableVersion('0.0.9999'), '0.1.0 > 0.0.9999')
tap.ok(common.comparableVersion('1.0.0') > common.comparableVersion('0.9999.9999'), '1.0.0 > 0.9999.9999')
tap.ok(common.comparableVersion('1.0.0.0') > common.comparableVersion('0.9999.9999.9999'), '1.0.0.0 > 0.9999.9999.9999')
tap.ok(common.comparableVersion('0.11.6') > common.comparableVersion('0.11.5'), 'browser-laptop compares ok 0.11.6 > 0.11.5')
tap.ok(common.comparableVersion('0.12.0') > common.comparableVersion('0.11.5'), 'browser-laptop compares ok 0.12.0 > 0.11.5')
tap.ok(common.comparableVersion('53.0.2785.116') > common.comparableVersion('52.0.2785.116'), 'chromium versions compare ok')
tap.ok(common.comparableVersion('99.99.99') === common.comparableVersion('99.99.99'), '3 component same version compares ok')
tap.ok(common.comparableVersion('99.99.99.99') === common.comparableVersion('99.99.99.99'), '4 component same version compares ok')
tap.ok(common.comparableVersion('99.99.99') !== common.comparableVersion('99.99.99.99'), '4 component vs 3 component compares differently')
