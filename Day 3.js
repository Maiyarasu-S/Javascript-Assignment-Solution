<script>
 function isPossibleToMakeDivisible(arr , n)
{
var remainder = 0;

    for (i=0; i<n; i++)

        remainder = (remainder + arr[i]) % 3;
return (remainder == 0);
}
 

var arr = [ 40, 50, 90 ];

var n = 3;

if (isPossibleToMakeDivisible(arr, n))

    document.write("Yes\n");
else

    document.write("No\n");

 
</script>