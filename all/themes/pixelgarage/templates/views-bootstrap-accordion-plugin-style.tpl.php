<div id="views-bootstrap-accordion-<?php print $id ?>" class="<?php print $classes ?>">
  <?php foreach ($rows as $key => $row): ?>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a class="accordion-toggle <?php if($key <> 0) print 'collapsed' ?>"
             data-toggle="collapse"
             href="#collapse<?php print $key ?>">
            <?php if ($key == 0): ?>
              <span class="fa fa-minus-square-o"></span>
            <?php else: ?>
              <span class="fa fa-plus-square-o"></span>
            <?php endif; ?>
            <span><?php print $titles[$key] ?></span>
          </a>
        </h4>
      </div>

      <div id="collapse<?php print $key ?>" class="panel-collapse collapse <?php if($key == 0) print 'in' ?>">
        <div class="panel-body">
          <?php print $row ?>
        </div>
      </div>
    </div>
  <?php endforeach ?>
</div>
