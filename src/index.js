import PandaBridge from 'pandasuite-bridge';
import './index.css';

PandaBridge.init(() => {
  PandaBridge.listen('reload', () => {
    if (window.parent) {
      window.parent.location.reload();
    } else {
      window.location.reload();
    }
  });
});
