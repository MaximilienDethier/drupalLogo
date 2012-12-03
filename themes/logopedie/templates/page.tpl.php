        <header>
			<img src="<?php print $logo ?>" alt="logo" id="logo"/>
			  
			 <div id="containerNav">
				<nav>
					<?php print render($page['menu']); ?>
				</nav>
			</div>
        </header>
        
        <div id="content">
           <?php print render($page['content']); ?>
        </div>
        <footer>
			<?php print render($page['footer']); ?>
        </footer>