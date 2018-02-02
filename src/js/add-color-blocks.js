import write from './common/write';

import redBlock from './red-block';
import blueBlock from './blue-block';
import greenBlock from './green-block';

write(redBlock);
write(blueBlock);
write(greenBlock);

let counter = 0;
if (module.hot) {

    module.hot.accept('./red-block', function() {
        counter++;
        alert(`Red block was updated ${counter} time(s).`);
    });
}
