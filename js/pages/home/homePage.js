import { Page } from '../../layouts/Page.js'
import { Navigation } from './components/Nav.js'
import { Content } from './components/Content.js'
import { NoLogin } from '../../layouts/NoLoginInfo.js'
import { DropDown } from "../../layouts/DropDown.js";

export const HomePage = new Page()
	.children(new Navigation())
	.children(new Content(new NoLogin()))
