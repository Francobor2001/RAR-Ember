import { assert, module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | star-rating', function (hooks) {
  setupRenderingTest(hooks);

  test('Renders the full and empty stars correctly', async function (assert) {
    this.set('rating', 4);
    this.set('updateRating', () => {});
    
    // <StarRating @rating="{{song.rating}}" @onUpdate={{fn this.updateRating song}} />
    await render(hbs` <StarRating
        @rating={{this.rating}}
        @onUpdate={{this.updateRating}}
      />
`);
    assert
      .dom('[data-test-rr="full-star"]')
      .exists({ count: 4 }, 'The right amount of full stars is rendered');
    
    assert
      .dom('[data-test-rr="empty-star"]')
      .exists({ count: 1 }, 'The right amount of empty stars is rendered');

    this.set('rating', 2);
    assert
      .dom('[data-test-rr="full-star"]')
      .exists(
        { count: 2 },
        'The right amount of full stars is rendered after changing'
      );

    assert
      .dom('[data-test-rr="empty-star"]')
      .exists(
        { count: 3 },
        'The right amount of empty stars is rendered after changing rating'
      );
  });

  //test for clicking on stars
  test('Calls onUpdate with the correct value', async function (assert) {
    this.set('rating', 4);
    this.set('updateRating', (rating) => {
      assert.step(`Update to rating: ${rating}`);
    });

    await render(hbs`<StarRating @rating={{this.rating}} 
    @onUpdate={{this.updateRating}}
    />`);

    await click('[data-test-rr="star-rating-button"]:nth-child(4)');
    //if the button is clicked we espect to call this function with 4 as argument
    assert.verifySteps(['Update to rating: 4']);
  });
});
