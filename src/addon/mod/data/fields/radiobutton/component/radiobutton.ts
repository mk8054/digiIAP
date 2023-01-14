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
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AddonModDataFieldPluginComponent } from '../../../classes/field-plugin-component';

/**
 * Component to render data radiobutton field.
 */
@Component({
    selector: 'addon-mod-data-field-radiobutton',
    templateUrl: 'addon-mod-data-field-radiobutton.html'
})
export class AddonModDataFieldRadiobuttonComponent extends AddonModDataFieldPluginComponent {

    options = [];

    constructor(protected fb: FormBuilder) {
        super(fb);
    }

    /**
     * Initialize field.
     */
    protected init(): void {
        if (this.isShowOrListMode()) {
            return;
        }

        this.options = this.field.param1.split('\n');

        let val;
        if (this.mode == 'edit' && this.value) {
            val = this.value.content;
        }

        this.addControl('f_' + this.field.id, val);
    }
}