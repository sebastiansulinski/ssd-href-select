# ssdSelectHref jQuery plugin

Simple widget to redirect to the page associated with the selected option.

## Installation

You can install the plugin via npm

```
npm install ssd-href-select
```

## Usage

#### Example html

```
<form class="select-pagination">
    <span class="disabled">&laquo;</span>
    <span class="pagination-page">Page</span>
    <select>
        <option selected>1</option>
        <option value="/?page=2">2</option>
    </select>
    <span class="pagination-of">of 2</span>
    <a href="/?page=2">&raquo;</a>
</form>
```

#### Call plugin on the above html

```
$('.select-pagination').ssdHref();
```

Plugin takes either `value` or `data-href` as the new location to redirect to.
You can overwrite data-* argument with the optional argument `dataHref`):

```
$('.select-pagination').ssdHref({
    dataHref: 'url'
});
```

With the above argument the plugin will first check for `data-url` and if no value is associated it will then fallback to `value` attribute for the url.

```
<form class="select-pagination">
    <span class="disabled">&laquo;</span>
    <span class="pagination-page">Page</span>
    <select>
        <option selected>1</option>
        <option value="2" data-url="/?page=2">2</option>
    </select>
    <span class="pagination-of">of 2</span>
    <a href="/?page=2">&raquo;</a>
</form>
```