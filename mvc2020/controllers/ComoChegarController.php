<?php
/**
 * home - Controller do mapa
 *
 * @package mvc
 * @since 0.1
 */
class ComoChegarController extends MainController
{
    public function index() {
		$this->title = 'Como Chegar';
	   $this->base("/views/como_chegar/index.php", $this->title);
    }

}
