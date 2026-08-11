import copy

letters = ['a','b','c','d']

letters_copy = letters.copy() # shallow copy

letters_copy.append('x')

print('original:', letters)

print('copy:', letters_copy)

# copying

matrix = [

    ['a','b'],
    ['c','d'],
]

matrix_copy = copy.deepcopy(matrix)
matrix.pop()
matrix_copy[0].append('z')

print('original:', matrix)
print('copy: ', matrix_copy)