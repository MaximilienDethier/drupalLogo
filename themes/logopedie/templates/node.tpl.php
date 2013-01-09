<?php print $user_picture; ?>

    <?php if ($display_submitted): ?>
      <span class="submitted"><?php print $date; ?> — <?php print $name; ?></span>
    <?php endif; ?>


        <?php
          // We hide the comments and links now so that we can render them later.
        hide($content['comments']);
        hide($content['links']);
        print render($content);
       ?>


    <?php if (!empty($content['links']['terms'])): ?>
      <?php print render($content['links']['terms']); ?>
    <?php endif;?>

    <?php if (!empty($content['links'])): ?>
        <?php print render($content['links']); ?>
      <?php endif; ?>




<?php print render($content['comments']); ?>