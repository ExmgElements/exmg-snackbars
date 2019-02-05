import {showSnackBar} from '../exmg-snackbars';

const {assert} = chai;

suite('<exmg-snackbars>', function () {
  suite('base usage', function () {
    test('normal toast is displayed', function (done) {
      showSnackBar('test message', {duration: 1000});

      assert.exists(document.querySelector('#paper-toast-container'), 'Toast container should exist');
      assert.exists(document.querySelector('paper-toast'), 'Toast should exist');
      assert.notExists(document.querySelector('paper-icon-button'), 'Toast close button should exist');

      setTimeout(() => {
        assert.notExists(document.querySelector('paper-toast'), 'Toast should not exist');
        done();
      },  1000);
    });

    test('normal toast with custom node id is displayed', function (done) {
      showSnackBar('test message', {duration: 1000, toastContainerNodeId: 'custom-id'});

      assert.exists(document.querySelector('#' + 'custom-id'), 'Toast container should exist');
      assert.exists(document.querySelector('paper-toast'), 'Toast should exist');
      assert.notExists(document.querySelector('paper-icon-button'), 'Toast close button should exist');

      setTimeout(() => {
        assert.notExists(document.querySelector('paper-toast'), 'Toast should not exist');
        done();
      },  1000);
    });

    test('infinite toast with close button is displayed', function (done) {
      showSnackBar('test message', {duration: 0, showCloseButton: true});

      assert.exists(document.querySelector('#paper-toast-container'), 'Toast container should exist');
      assert.exists(document.querySelector('paper-toast'), 'Toast should exist');
      assert.exists(document.querySelector('paper-icon-button'), 'Toast close button should exist');

      setTimeout(() => {
        assert.exists(document.querySelector('paper-toast'), 'Toast should still exist');

        /**
         * Testing toast close feature
         */
        document.querySelector('paper-icon-button')!.click();
        setTimeout(() => {
          assert.notExists(document.querySelector('paper-toast'), 'Toast should not exist');
          done();
        }, 100);

      }, 4000);
    });
  });
});
