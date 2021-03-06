// Copyright (C) Atlas City Global <https://atlascity.io>
// This file is part of vuex-orm-plugin-lokijs <https://github.com/atlascity/vuex-orm-plugin-lokijs>.
//
// vuex-orm-plugin-lokijs is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// vuex-orm-plugin-lokijs is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with vuex-orm-plugin-lokijs.  If not, see <http://www.gnu.org/licenses/>.

import VuexORMLoki from './vuex-orm-loki'
import { Components, Plugin } from '@vuex-orm/core/lib/plugins/use'
import Database from '@vuex-orm/core/lib/database/Database'
import { VuexORMLokiOptions } from './common/Interfaces'

export default class VuexORMLokiPlugin implements Plugin {
  public static instance: VuexORMLokiPlugin;

  public static install (components: Components, options: VuexORMLokiOptions, hydrationCompletedCallback: any) : VuexORMLokiPlugin {
    VuexORMLokiPlugin.instance = new VuexORMLoki(components, options.database, options.options, options.hydrationCompletedCallback)
    return VuexORMLokiPlugin.instance
  }
}
