//冒泡排序
function bubble(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j + 1] > arr[j]) {
                var data = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = data;
            }
        }
    }

}