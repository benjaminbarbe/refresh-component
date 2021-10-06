import PandaBridge from 'pandasuite-bridge';
import './index.css';

PandaBridge.init(() => {
  PandaBridge.listen('reload', () => {
    window.top.location.reload();
  });
});
