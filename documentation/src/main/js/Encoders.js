// tutorial::polymer-templates/tutorial-template-model-encoders.asciidoc
import {PolymerElement,html} from '@polymer/polymer/polymer-element.js';

class MyTemplate extends PolymerElement {
    static get template() {
        return html`
            <div style="width: 200px;">
                <label>Birth date:</label>
                <label for="day">Enter your birthday:</label><paper-input id="day" value="{{birthDate.day}}"></paper-input>
                <label for="month">Enter the month of your birthday:</label><paper-input id="month" value="{{birthDate.month}}"></paper-input>
                <label for="year">Enter the year of your birthday:</label><paper-input id="year" value="{{birthDate.year}}"></paper-input>
                <button on-click="commit" id="commit">Commit</button>
            </div>`;
    }

    static get is() {
        return 'my-template';
    }
}
