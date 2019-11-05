function soloNumeros(e)
{
	var key = window.Event ? e.which : e.keyCode
    return ((key >= 48 && key <= 57) || (key==8))
   
}

function soloLetras(e)
{
	var key = window.Event ? e.which : e.keyCode
    return ((key < 48 || key > 57))
}