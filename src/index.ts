import './main.scss';
import runApp, {AlertService, ComponentService} from 'app';

const alertService = new AlertService();
const componentService = new ComponentService();

runApp(alertService, componentService);
