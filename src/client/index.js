import '@lwc/synthetic-shadow';
import { createElement } from 'lwc';
import Container from 'c/container';

const app = createElement('c-container', { is: Container });
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#main').appendChild(app);
