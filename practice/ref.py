# checking the reference

import copy

original = [

    ['a','b'],
    ['c','d'],
]

copy1 = original
print("same object?", original is copy1,"\n")

# shallow copy

copy2 = original.copy()
print("Same objects?", original is copy2)
print("Shared Lists?", original[0] is copy2[0], "\n")

# deep copy
copy3 = copy.deepcopy(original)
print("Same objects?", original is copy2)
print("Shared Lists?", original[0] is copy2[0], "\n")