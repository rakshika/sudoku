$(document).ready(function(){
	$(".finishBtn").click(function(){
		var i;
		var j;
		var k;
		var count = 0;
		var errmsg = 0;
		//var errlist;
		var f = new Array();
		var h = new Array();
		var v = new Array();
		var b = new Array();
		var bi = new Array();
		var err = new Array();
		
		$(".fixed").css("background-color", "#f9ecf9");
		$(".fill").css("background-color", "white");
			
		/*	copy elements entered in sudoku to array f[][]	*/
		for (i=0;i<9;i++) 
		{
			f[i]=new Array();
			err[i]=new Array();
			for (j=0;j<9;j++) 
			{
				err[i][j]=0;
				if(($('#i' + i + j).val().length===0) || !($.isNumeric($('#i' + i + j).val())) || ($('#i' + i + j).val()==0))
				{
					err[i][j]=1;
				}
				else
				{
					f[i][j]=$('#i' + i + j).val();
				}
			}
		}
		
		
		/*	Display	array with errors of not entering appropriate input	*/
		/*for(i=0;i<9;i++)
		{
			for(j=0;j<9;j++)
			{
				if(i==0 && j==0)
				{
					errlist=err[0][0];
				}
				else
				{
					errlist=errlist+" "+err[i][j];
				}
			}
			errlist=errlist+"\n";
		}
		alert(errlist);*/
		
		
		for(i=0;i<9;i++)
		{
			for(j=0;j<9;j++)
			{
				if(err[i][j]==1)
				{
					$('#i' + i + j).css("background-color", "#ff8080");
					errmsg=1;
				}
			}
		}
		if(errmsg==1)
		{
			$("#msg").text("Fill all the boxes with numbers between 1 to 9.");
			errmsg=0;
		}
		
		
		
		/*	Horizontal and vertical rows and columns validation	*/
		for(i=0;i<9;i++)
		{	
			for(k=0;k<9;k++)
			{
				h[k]=-1;
				v[k]=-1;
			}
			for(j=0;j<9;j++)
			{
				if(h[f[i][j]-1]==-1)
				{
					h[f[i][j]-1]=j;
				}
				else if((h[f[i][j]-1]!=-1)||(f[i][j]==""))
				{
					err[i][j]=1;
					err[i][h[f[i][j]-1]]=1;
					errmsg=1;
					//alert("error" + i + " " +  j + " " + f[i][j]);
					//alert("error" + i + " " +  h[f[i][j]-1] + f[i][h[f[i][j]-1]]);
				}
				if(v[f[j][i]-1]==-1)
				{
					v[f[j][i]-1]=j;
				}
				else if((v[f[j][i]-1]!=-1))
				{
					err[j][i]=1;
					err[v[f[j][i]-1]][i]=1;
					errmsg=1;
					//alert("error" + j + " " +  i + f[j][i]);
					//alert("error" +  v[f[j][i]-1] + " " + i + f[v[f[j][i]-1]][i]);
				}
			}
		}
		
		
		
		/*	Validation of smaller boxes	*/
		for(i=0;i<9;i++)
		{
			if(i==0||i==3||i==6)
			{
				for(k=0;k<9;k++)
				{
					b[k]=-1;
					bi[k]=-1;
				}
			}
			for(j=0;j<3;j++)
			{
				if(b[f[i][j]-1]==-1)
				{
					b[f[i][j]-1]=j;
					bi[f[i][j]-1]=i;
				}
				else if((b[f[i][j]-1]!=-1))
				{
					err[i][j]=1;
					err[bi[f[i][j]-1]][b[f[i][j]-1]]=1;
					errmsg=1;
					//alert("error" + i + " " +  j + " " + f[i][j]);
					//alert("error" + i + " " +  b[f[i][j]-1] + f[i][b[f[i][j]-1]]);
				}
			}
		}
		for(i=0;i<9;i++)
		{
			if(i==0||i==3||i==6)
			{
				for(k=0;k<9;k++)
				{
					b[k]=-1;
					bi[k]=-1;
				}
			}
			for(j=3;j<6;j++)
			{
				if(b[f[i][j]-1]==-1)
				{
					b[f[i][j]-1]=j;
					bi[f[i][j]-1]=i;
				}
				else if((b[f[i][j]-1]!=-1))
				{
					err[i][j]=1;
					err[bi[f[i][j]-1]][b[f[i][j]-1]]=1;
					errmsg=1;
				}
			}
		}
		for(i=0;i<9;i++)
		{
			if(i==0||i==3||i==6)
			{
				for(k=0;k<9;k++)
				{
					b[k]=-1;
					bi[k]=-1;
				}
			}
			for(j=6;j<9;j++)
			{
				if(b[f[i][j]-1]==-1)
				{
					b[f[i][j]-1]=j;
					bi[f[i][j]-1]=i;
				}
				else if((b[f[i][j]-1]!=-1))
				{
					err[i][j]=1;
					err[bi[f[i][j]-1]][b[f[i][j]-1]]=1;
					errmsg=1;
				}
			}
		}
		if(errmsg==1)
		{
			$("#msg").text("Red boxes indicate the errors.");
			errmsg=0;
		}
		
		/*	Display cells with error	*/
		/*for(i=0;i<9;i++)
		{
			for(j=0;j<9;j++)
			{
				if(i==0 && j==0)
				{
					errlist=err[0][0];
				}
				else
				{
					errlist=errlist+" "+err[i][j];
				}
			}
			errlist=errlist+"\n";
		}
		alert(errlist);*/
		
		
		/*	Change color of cells with error	*/
		for(i=0;i<9;i++)
		{
			for(j=0;j<9;j++)
			{
				if(err[i][j]==1)
				{
					count++;
					$('#i' + i + j).css("background-color", "#ff8080");
				}
			}
		}
		if(count==0)
		{
			$("#msg").text("COMPLETED!!");
		}
	});
});