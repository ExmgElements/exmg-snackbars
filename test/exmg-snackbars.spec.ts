import {showSnackBar} from '../exmg-snackbars';

const {assert} = chai;

suite('<exmg-snackbars>', function () {
  suite('base usage', function () {
    setup(() => {
      showSnackBar('zzz', {duration: 0});
    });

    test('toast is displayed', function () {

    });
  });
});
