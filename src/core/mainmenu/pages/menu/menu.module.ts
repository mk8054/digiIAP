// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { CoreComponentsModule } from '@components/components.module';
import { CoreMainMenuPage } from './menu';

import { InapppurchasePage } from 'pages/inapppurchase/inapppurchase';
import { InapppurchasePageModule } from 'pages/inapppurchase/inapppurchase.module';
import { CoreAppSettingsPage } from '@core/settings/pages/app/app';

@NgModule({
    declarations: [
        CoreMainMenuPage,
    ],
    imports: [
        CoreComponentsModule,
        IonicPageModule.forChild(CoreMainMenuPage),
        TranslateModule.forChild()
    ],
})
export class CoreMainMenuPageModule {}
