import { Navigation } from './components/Nav.js'
import { Content } from './components/Content.js'
import { Page } from '../../components/layouts/Page.js'
import { Filter} from "./components/Filter.js";

export const ControlPage = () =>
	new Page().section(new Navigation()).section(new Filter()).section(new Content())
